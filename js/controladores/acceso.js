    $(function () {
        $('#ok').click(function () {
            var valido = true;
            $('input').each(function () {
                var grupo = $(this).parents('.form-group');
                var icono = grupo.find('.verif');
                if (this.checkValidity()) {
                    grupo.addClass('has-success').removeClass('has-error');
                    icono.addClass('glyphicon-ok').removeClass('glyphicon-remove');
                } else {
                    grupo.addClass('has-error').removeClass('has-success');
                    icono.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                    valido = false;
                }
            });

            if (valido) {
                $('#modaltrue').modal();
                //$('#success-alert').removeClass();
            } else {
                $('#modalfalse').modal();
                //$('#success_alert').removeClass('hidden');
            };
        });
    });