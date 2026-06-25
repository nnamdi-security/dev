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