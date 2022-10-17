const FormRowTextArea = ({
  name,
  value,
  handleChange,
  labelText,
  rows,
  cols,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        value={value}
        name={name}
        onChange={handleChange}
        className="form-textarea"
        rows={rows || 8}
        cols={cols || 80}
      />
    </div>
  );
};

export default FormRowTextArea;
