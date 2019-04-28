/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
$(document).ready(function() {
  $('body').on('submit', '#frmChat', function(e) {
    e.preventDefault();
    $('#chatList').append(`
      <table>
            <tr>
              <td>
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                  style="width: 100%; max-width: 48px; border-radius: 50%; vertical-align: middle;"
                />
                <span style="vertical-align: middle; font-weight: 700;"
                  >あなた</span
                >
              </td>
              <td style="text-align: right;">
                2019-04-28
              </td>
            </tr>
            <tr>
              <td>
                ${$('#inputChat').val()}
              </td>
            </tr>
          </table>
          `);
    $('#inputChat').val('');
  });
});
