export interface PracticeSet {
  id: string;
  title: string;
  audioUrl: string;
  content: string[];
}

export const practiceSets: PracticeSet[] = [
  {
    id: 'test-1',
    title: 'Practice Test 1: Zoo Welcome',
    audioUrl: '/audio/Speaking - Practice Test 1_Listen and Repeat.MP3',
    content: [
      'We have a variety of wildlife.',
      'Bears, wolves, and large cats are to the right.',
      'You can find sea lions and elephants further down the path.',
      'Please, no outside food or drinks, and do not feed the animals.',
      'Avoid banging or tapping on the displays and enclosures.',
      'For those with children, we offer summer camps and educational opportunities.',
      'The visitor\'s center, located near the front entrance, can give you more information.'
    ]
  },
  {
    id: 'test-2',
    title: 'Practice Test 2: Campus Gym',
    audioUrl: '/audio/Speaking - Practice Test 2_Listen and Repeat.MP3',
    content: [
      'Welcome to our campus gym.',
      'Cardio machines are near the entrance.',
      'Free weights are in the back.',
      'All of our locker rooms are equipped with showers and towels.',
      'Our fitness instructors hold exercise classes over here.',
      'You can check the schedule for available classes and timings.',
      'If you have any questions, please seek assistance from the attendants at the help desk.'
    ]
  },
  {
    id: 'set-1',
    title: 'Set 1: University Dining Hall',
    audioUrl: '/audio/1. University Dining Hall.MP3',
    content: [
      'Welcome to the student dining hall.',
      'Please return your tray when finished.',
      'Salad, drinks, and desserts are available to your left.',
      'Hot food is served from 11 a.m. to 2 p.m.',
      'You can pay with a student card or mobile app.',
      'If you have allergies, check the posted ingredient information before ordering.',
      'Food from the dining hall must not be taken into classrooms or libraries.'
    ]
  },
  {
    id: 'set-2',
    title: 'Set 2: Museum Front Desk',
    audioUrl: '/audio/2. Museum Front Desk.MP3',
    content: [
      'Welcome to the city museum.',
      'Please keep your ticket visible.',
      'Audio guides are available at the information desk.',
      'Special exhibits are located on the second floor.',
      'You’re free to explore the galleries at your own pace.',
      'If you’d like a guided tour, they begin every hour near the gift shop.',
      'Flash photography is not permitted, and cell phones must be silenced during your visit.'
    ]
  },
  {
    id: 'set-3',
    title: 'Set 3: College Bookstore',
    audioUrl: '/audio/3. College Bookstore.MP3',
    content: [
      'Welcome to the campus bookstore.',
      'Textbooks are in the back section.',
      'You’ll find notebooks and pens along the left wall.',
      'Buybacks happen during finals week every semester.',
      'Digital materials can be purchased using your student login.',
      'If a book is sold out, you can place an order at the counter.',
      'Returns are accepted within seven days if you keep the receipt and original packaging.'
    ]
  },
  {
    id: 'set-4',
    title: 'Set 4: Airport Security Checkpoint',
    audioUrl: '/audio/4. Airport Security Checkpoint.MP3',
    content: [
      'Welcome to the security screening area.',
      'Please remove your shoes.',
      'Laptops must be placed in separate trays.',
      'Liquids should be in containers under 100 milliliters.',
      'Keep your boarding pass and ID visible at all times.',
      'If you have any metal implants, notify the security officer before scanning.',
      'All carry-on items are subject to inspection and must comply with airline regulations.'
    ]
  },
  {
    id: 'set-5',
    title: 'Set 5: Train Station Platform',
    audioUrl: '/audio/5. Train Station Platform.MP3',
    content: [
      'This is platform number four.',
      'The train is running on time.',
      'Tickets must be scanned before you board.',
      'Please stand behind the yellow line for safety.',
      'Announcements for delays will be made over the loudspeaker.',
      'If you are unsure about your train, ask a conductor for help.',
      'Baggage must be stored safely, and aisles should remain clear throughout the trip.'
    ]
  },
  {
    id: 'set-6',
    title: 'Set 6: Campus Health Center',
    audioUrl: '/audio/6. Campus Health Center.MP3',
    content: [
      'Welcome to the student health center.',
      'Check in at the front desk.',
      'Bring your student ID and insurance card.',
      'Walk-in appointments are available from 9 to 11 a.m.',
      'You may request a private consultation if needed.',
      'If your symptoms worsen, return for further evaluation or referral.',
      'Medications are dispensed on-site unless a prescription requires a local pharmacy.'
    ]
  },
  {
    id: 'set-7',
    title: 'Set 7: Public Library Main Hall',
    audioUrl: '/audio/7. Public Library Main Hall.MP3',
    content: [
      'Welcome to the city library.',
      'Please speak quietly inside.',
      'The catalog terminals are near the entrance.',
      'Library cards can be issued with a valid ID.',
      'Children’s programs are held in the reading room weekly.',
      'If you need help finding a book, ask a librarian at the help desk.',
      'Food and drink are not allowed unless you’re in the designated café area.'
    ]
  },
  {
    id: 'set-8',
    title: 'Set 8: Hotel Lobby',
    audioUrl: '/audio/8. Hotel Lobby.MP3',
    content: [
      'Welcome to the Riverstone Hotel.',
      'Check-in starts at 3 p.m.',
      'The elevators are to your right.',
      'Breakfast is served from 7 to 10 a.m. in the lounge.',
      'You’ll need your keycard to access the gym and pool.',
      'If you require additional towels, call housekeeping at extension 3.',
      'Guests are asked to observe quiet hours between 10 p.m. and 7 a.m.'
    ]
  },
  {
    id: 'set-9',
    title: 'Set 9: Campus Computer Lab',
    audioUrl: '/audio/9. Campus Computer Lab.MP3',
    content: [
      'This is the computer lab.',
      'Log in with your student ID.',
      'No food or drinks are allowed here.',
      'Printing is available using your university account balance.',
      'Use headphones if you’re watching videos or attending Zoom classes.',
      'If a computer is not working, report it to the lab assistant immediately.',
      'Please sign out and shut down your station before leaving the room.'
    ]
  },
  {
    id: 'set-10',
    title: 'Set 10: Art Gallery Opening',
    audioUrl: '/audio/10. Art Gallery Opening.MP3',
    content: [
      'Welcome to the gallery opening.',
      'Coats can be checked at the door.',
      'Light refreshments are available near the sculpture room.',
      'Photography is allowed but without flash.',
      'Feel free to ask the artists questions during the exhibit.',
      'If you’d like to purchase a piece, speak with the gallery coordinator.',
      'Children must remain with an adult and avoid touching the displayed artwork.'
    ]
  },
  {
    id: 'set-11',
    title: 'Set 11: Learning to work at a Book shop',
    audioUrl: '/audio/11. Learning to work at book shop.MP3',
    content: [
      'Welcome to our book shop.',
      'Working here is really fun.',
      'We have a café where you can eat.',
      'Employees get a discount on all food.',
      'Some people work at the café when it gets busy.',
      'Most of the time, you will be working to put books on the shelves.',
      'We set up special displays each month featuring books on a specific theme or topic.'
    ]
  },
  {
    id: 'set-12',
    title: 'Set 12: At the Train Station',
    audioUrl: '/audio/12. At the Train Station.MP3',
    content: [
      'The train is late.',
      'Please wait behind the yellow line.',
      'The next train will arrive in five minutes.',
      'Don’t forget to validate your ticket before boarding.',
      'Passengers transferring to the airport line should use Platform 3.',
      'Due to maintenance, express services will not stop at this station today.',
      'If you need assistance with luggage or schedule information, please speak to a station worker at the main entrance.'
    ]
  },
  {
    id: 'set-13',
    title: 'Set 13: At the University Library',
    audioUrl: '/audio/13. At the University Library .MP3',
    content: [
      'The library opens at nine.',
      'Silence is required on all floors.',
      'You can borrow up to five books at once.',
      'Late returns may result in a small fine per day.',
      'Study rooms can be reserved online or at the front desk.',
      'Reference materials must be used inside the library and cannot be taken home.',
      'If you’re doing research, the digital archives let you read thousands of journals and old records.'
    ]
  },
  {
    id: 'set-14',
    title: 'Set 14: At the Airport',
    audioUrl: '/audio/14. At the Airport.MP3',
    content: [
      'Show your ID at check-in.',
      'Boarding begins in twenty minutes.',
      'Please keep your passport and ticket ready.',
      'Flight 204 to Berlin has been delayed due to weather conditions.',
      'All liquids in your carry-on must be under 100 milliliters and packed in a clear bag.',
      'For international flights, passengers are advised to arrive at least three hours early.',
      'If your gate changes or flight is canceled, you\'ll be notified by announcement and text (if registered).'
    ]
  },
  {
    id: 'set-15',
    title: 'Set 15: At the Hospital',
    audioUrl: '/audio/15. At the Hospital.MP3',
    content: [
      'Please take a seat in the waiting area.',
      'The nurse will call your name shortly.',
      'Visitors must wear a mask while inside the facility.',
      'Patients must not eat or drink anything before the procedure.',
      'If the symptoms continue, you should schedule a follow-up appointment.',
      'If the doctor had arrived later, the patient’s condition could have gotten worse.',
      'The treatment was expected to take weeks, but the patient recovered in just ten days.'
    ]
  },
  {
    id: 'set-16',
    title: 'Set 16: At the Hotel (Receptionist)',
    audioUrl: '/audio/16. At the Hotel.MP3',
    content: [
      'Good evening, welcome to our hotel.',
      'May I have your name for the reservation?',
      'Check-in begins at three o’clock, and check-out is at noon.',
      'Breakfast is served in the dining room from 6:30 to 10 a.m.',
      'The pool and fitness center are available until 9 p.m.',
      'If you need additional towels or toiletries, please dial housekeeping.',
      'Guests attending conferences may use the business lounge and meeting rooms.'
    ]
  },
  {
    id: 'set-17',
    title: 'Set 17: At the Airport (Security Officer)',
    audioUrl: '/audio/17. At the Airport.MP3',
    content: [
      'Please place your bags on the conveyor belt.',
      'Remove laptops and liquids from your carry-on.',
      'All passengers must take off jackets and shoes.',
      'Boarding passes will be checked after the security screening.',
      'For international flights, passports must be ready for inspection.',
      'If your bag requires additional screening, please step aside for assistance.',
      'After clearing security, follow the signs to your departure gate.'
    ]
  },
  {
    id: 'set-18',
    title: 'Set 18: At the Coffee Shop (Barista)',
    audioUrl: '/audio/18. At the Coffee Shop.MP3',
    content: [
      'Welcome, what can I get for you today?',
      'We serve coffee, tea, and fresh pastries.',
      'Would you like your latte hot or iced?',
      'Non-dairy options include soy, oat, and almond milk.',
      'Our rewards program gives you points toward free drinks.',
      'Specialty drinks can be customized with flavors like vanilla or caramel.',
      'Please pick up your order at the counter when your name is called.'
    ]
  },
  {
    id: 'set-19',
    title: 'Set 19: At the Museum (Museum Staff)',
    audioUrl: '/audio/19. At the Museum.MP3',
    content: [
      'Good afternoon, welcome to the museum.',
      'Tickets are available at the front desk.',
      'Photography is allowed, but flash is not permitted.',
      'Guided tours start every hour near the main staircase.',
      'Children can join hands-on workshops in the education center.',
      'Exhibits are arranged by historical periods and cultural themes.',
      'For more details, please see the brochure or visit our website.'
    ]
  },
  {
    id: 'set-20',
    title: 'Set 20: At the Supermarket (Store Clerk)',
    audioUrl: '/audio/20. At the Supermarket.MP3',
    content: [
      'Welcome to our supermarket.',
      'The produce section is on your left.',
      'Fresh bread is baked daily and placed near the back.',
      'Please line up at the checkout counters with your items.',
      'Weekly discounts are listed in the flyer at the entrance.',
      'We provide reusable bags for customers who want to avoid plastic.',
      'For assistance finding specific items, please ask any staff member wearing a green apron.'
    ]
  },
  {
    id: 'set-21',
    title: 'Set 21: At the Restaurant (Server)',
    audioUrl: '/audio/21. At the Restaurant.MP3',
    content: [
      'Welcome, how many people are in your party?',
      'Here is the menu.',
      'Today’s special is grilled salmon with rice and vegetables.',
      'Would you like still water, sparkling water, or something else to drink?',
      'Our desserts are freshly made and include cake, pie, and ice cream.',
      'If you have food allergies, please let me know so I can inform the kitchen.',
      'Although we are very busy this evening, we will do our best to serve you promptly.'
    ]
  },
  {
    id: 'set-22',
    title: 'Set 22: At the Train Station (Station Announcer)',
    audioUrl: '/audio/22. At the Train Station.MP3',
    content: [
      'Attention, passengers.',
      'The train to Chicago departs at 10:15.',
      'Please have your tickets ready before boarding.',
      'Due to track maintenance, some trains may experience delays.',
      'Express trains stop only at major cities, while local trains stop more frequently.',
      'Passengers should check the display boards for updated platform numbers.',
      'For safety, please stand behind the yellow line until the train comes to a complete stop.'
    ]
  },
  {
    id: 'set-23',
    title: 'Set 23: At the Hospital (Nurse)',
    audioUrl: '/audio/23. At the Hospital.MP3',
    content: [
      'Good morning, may I help you?',
      'Please check in at the reception desk.',
      'The doctor will see you shortly.',
      'Patients should bring identification and insurance information.',
      'Test results are usually available within twenty-four hours.',
      'Visitors must sanitize their hands before entering patient rooms.',
      'If you have an emergency, go directly to the emergency department, which is open 24 hours.'
    ]
  },
  {
    id: 'set-24',
    title: 'Set 24: At the Bank (Teller)',
    audioUrl: '/audio/24. At the Bank.MP3',
    content: [
      'Welcome, how can I assist you today?',
      'Please insert your card into the machine.',
      'Cash can be withdrawn in multiples of 20 dollars only.',
      'To open an account, you will need two forms of identification.',
      'Transfers between accounts are completed within minutes.',
      'For security reasons, never share your PIN with anyone.',
      'Customers who prefer mobile banking can download our app for convenient access.'
    ]
  },
  {
    id: 'set-25',
    title: 'Set 25: At the Park (Park Ranger)',
    audioUrl: '/audio/25. At the Park.MP3',
    content: [
      'Welcome to the city park.',
      'Please keep dogs on a leash at all times.',
      'Trash and recycling bins are located throughout the park.',
      'The playground is on the right, and the picnic area is on the left.',
      'Events like concerts and festivals are held here during the summer.',
      'Jogging trails are marked with colored signs for distance and difficulty.',
      'To help protect nature and keep the environment healthy, please avoid picking plants or disturbing wildlife.'
    ]
  },
  {
    id: 'set-26',
    title: 'Set 26: At the Post Office (Clerk)',
    audioUrl: '/audio/26. At the Post Office.MP3',
    content: [
      'Good afternoon, may I help you?',
      'Tracking numbers are provided for most deliveries.',
      'Do you want to send this letter by regular or express mail?',
      'Packages must be weighed before postage is added.',
      'International shipping requires a customs declaration form.',
      'For faster service in the future, you can also print postage online.',
      'We offer additional services, such as registered mail and insurance.'
    ]
  }
];
