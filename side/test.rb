my_array = [1, 2, 3, 4, 5]
my_hash = {
  'first': 1,
  'second': 2,
  'third': 3,
  'forth': 4,
  'fifth': 5
}

puts my_array.class
puts my_hash.class

a = my_array.is_a? Object
b = my_hash.is_a? Object

puts a
puts b
