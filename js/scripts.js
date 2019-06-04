$(document).ready (function (){
  $("button#hello").click (function(){
      $("ul#user").prepend("<li>Hello</li>");
      $("ul#webpage").prepend("<li>Why hello there, dear user!</li>");
      $("ul#user").children("li").first().click (function(){
        this.remove();
      });
      $("ul#webpage").children("li").first().click (function(){
        this.remove();
      });
  });
  $("button#goodbye").click (function(){
      $("ul#user").prepend("<li>Goodbye</li>");
      $("ul#webpage").prepend("<li>So sorry to see you go!</li>");
      $("ul#user").children("li").first().click (function(){
        this.remove();
      });
      $("ul#webpage").children("li").first().click (function(){
        this.remove();
      });
  });
  $("button#stop").click (function(){
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>So sorry, didn't mean to upset you!</li>");
      $("ul#user").children("li").first().click (function(){
        this.remove();
      });
      $("ul#webpage").children("li").first().click (function(){
        this.remove();
      });
  });
});
