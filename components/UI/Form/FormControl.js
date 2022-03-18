const FormControl = ({ label, required, inputProps = {}, children }) => {
  return (
    <div className="form-control">
      <label htmlFor="FirstName" className="flex justify-start gap-2 label">
        {required && <span className="text-error">* </span>}
        <span>{label}</span>
      </label>
      <div className="input-group">
        {children || (
          <input
            className="w-full bg-white input-bordered input "
            {...inputProps}
            required={required}
          />
        )}
      </div>
    </div>
  )
}

export default FormControl
