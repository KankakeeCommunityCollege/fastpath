document.addEventListener('DOMContentLoaded', function() {
  const COPYRIGHT_SPAN_ID = 'copyrightDate';

  if ( ! document.getElementById(COPYRIGHT_SPAN_ID) )
    return;

  const copyrightSpanElement = document.getElementById(COPYRIGHT_SPAN_ID);
  const today = new Date();
  const year = today.getFullYear();

  copyrightSpanElement.innerHTML = year;
});
