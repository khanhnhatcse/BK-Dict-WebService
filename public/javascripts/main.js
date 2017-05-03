var id = [];
$("#optional-name option").each(function() {
    id.push([$(this).val(), 0]);
});
$('#addoptional').click(function() {

    var name = $('#optional-name').val();
    var text = $('#optional-name > option:selected').text();
    var content = $('#optional').val();
    if (!content.trim()) {
        alert('Nghĩa của từ loại không được rỗng ');
        return;
    }
    for (i = 0; i < id.length; i++) {
        if (id[i][0].localeCompare(name)) {
            var input1 = "";
            if (id[i][1] == 0) {
                var input1 = '<input type="hidden" id="optional-' + i + '" name="optional[' + i + '][name]" value="' + name + '" />';
                id[i][1]++;
            }
            var input2 = '<input type="hidden" name="optional[' + i + '][content]" value="' + content + '" />'

            $('#tbOptional').append(input1);

            $('#tbOptional > tbody:last').append('<tr><td>' + text + input2 + '</td><td>' + content + '</td><td><a href="javascript:void(0)" class="delOptional">Xóa</a></td></tr>');
            $('a.delOptional').click(function() {
                if (id[i][1] == 0) {
                    $('optional-' + i).remove();
                } else {
                    id[i][1]--;
                }
                $(this).parent().parent().remove();

            });
            break;
        }
    }


});

$('#addexample').click(function() {
    var content = $('#example').val();
    if (!content.trim()) {
        alert('Ví dụ không được rỗng ');
        return;
    }
    $('#tbExample > tbody:last').append('<tr><td>' + content + '<input type="hidden" name="example" value="' + content + '" /></td><td><a href="javascript:void(0)" class="delExample">Xóa</a></td></tr>');
    $('a.delExample').click(function() {
        $(this).parent().parent().remove();
    });
});