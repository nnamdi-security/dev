product_name = input("What is the product name: ")

product_price = int(input("What is the product price: "))

product_quantity = int(input("what is the quantity: "))

total_price = product_price * product_quantity

print()

print("--------- Receipt ---------")

print(f"Product: {product_name}")
print(f"Price: {product_price}")
print(f"Quantity: {product_quantity}")
print(f"Total: ${total_price}")


# Lesson 3: CONDIITION LOGIC
age = int(input("What is your age: "))
if age >= 18:
    print("You can register")
else:
    print("You are too young")
    
    
score = int(input("What is your score: "))
if score >= 70:
    print("Grade: A")
elif score >= 60:
    print("Grade: B")
elif score >= 50:
    print("Grade: C")
else:
    print("Grade: F")