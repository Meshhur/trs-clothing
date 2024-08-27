import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./Payment-form.styles";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) return

        const response = await fetch("/.netlify/functions/create-payment", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json())

        const client_secret = response.client_secret;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Kevin Joyce"
                }
            }
        })

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful')
        }
    }


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button buttonType='inverted'> Pay now </Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;