import { FormInputLabel, Input, Group } from "./FormInput.styles.jsx"

const FormInput = ({ label, ...props }) => {
    return (
        <Group>
            <Input {...props} />
            {label && (
                <FormInputLabel shrink={props.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
}

export default FormInput