json.human.js: Json Formatting for Human Beings
===============================================

A small library to convert a JSON object into a human readable HTML representation that is easy to style for different purposes.

Who?
----

Mariano Guerra

Why?
----

At `Event Fabric <http://event-fabric.com/>`_ we need to display JSON to people from all technical levels without being to technical but also without losing information about the underlying JSON object.

How?
----

you can see js/demo.js in this repo for an example or use it live at the `project page <http://marianoguerra.github.io/json.human.js>`_

::

    var node = JsonHuman.format(input);
    output.appendChild(node);


To install it, if you're using `Bower <https://github.com/bower/bower>`_ you can just run :

::

    bower install json-human --save


Alternatives
------------

* prettyprint.js: https://github.com/padolsey/prettyPrint.js

License?
--------

`MIT <http://opensource.org/licenses/MIT>`_
