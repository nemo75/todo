$(document).ready(function()
{
    $('form').on('submit', function(event) 
    {  
        event.preventDefault();
        var toAdd = $("input[name='searchbar']").val();
        $("input[name='searchbar']").val("");
        $('.tasklist').append('<li class="task"><input type="checkbox" class="checkbox">' + toAdd + '</li>');
    });
    
    $('ul').on("click", ':checkbox' ,function()
    {
        $(this).parent().toggleClass('barration');
    });
        $('#all').on("click", function()
        {   
            $('.task').show();
            $('.barration').show();
        });
        
        $('#active').on('click', function()
        {
            $('.task').show();
            $('.barration').hide();
        });
        
        $('#completed').on('click', function()
        {
            $('.task').hide();
            $('.barration').show();
        });
});