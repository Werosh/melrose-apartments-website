const CTAButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = 'cta-button';
  const variantClass = variant === 'secondary' ? 'cta-button-secondary' : '';
  
  return (
    <a
      href="https://www.thebookingbutton.com.au/properties/melrosedirect"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children || 'Book Now'}
    </a>
  );
};

export default CTAButton;
