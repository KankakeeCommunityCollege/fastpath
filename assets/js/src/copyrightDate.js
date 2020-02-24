const COPYRIGHT_SPAN_ID = 'copyrightDate';

function copyrightDate() {
  if ( ! document.getElementById(COPYRIGHT_SPAN_ID) )
    return;

  const copyrightSpanElement = document.getElementById(COPYRIGHT_SPAN_ID);
  const today = new Date();
  const year = today.getFullYear();

  copyrightSpanElement.innerHTML = year;
}

export default copyrightDate;
