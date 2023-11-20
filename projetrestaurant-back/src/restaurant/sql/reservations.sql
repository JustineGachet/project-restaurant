SELECT
	b.id,
	b.id_user,
	b.reservation_date,
	b.reservation_hour,
	b.seat,
	u.lastname,
	u.firstname,
	u.mail,
	u.phone_number,
	u.is_registered,
	u.allergie
FROM booking b
LEFT JOIN users u ON u.id = b.id_user;
