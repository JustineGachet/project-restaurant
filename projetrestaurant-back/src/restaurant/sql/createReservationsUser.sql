  INSERT INTO users (lastname, firstname, mail, phone_number, allergie)
  VALUES (?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
    lastname = VALUES(lastname), 
    firstname = VALUES(firstname), 
    mail = VALUES(mail),
    phone_number = VALUES(phone_number),
    allergie = VALUES(allergie);