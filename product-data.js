// Product data object
const productData = {
    'MBW Basic - 103': {
        title: 'MBW Basic - 103',
        content: `<p>The Basic Model is an open-body bike wash machine designed to fit into small spaces while delivering efficient results. It features a user-friendly system where you simply park the bike on the ramp, and the machine uses a conveyor belt to move the boom system backward and forward during the wash. This system reduces labor involvement by 95%, making it an excellent option for businesses looking for an affordable, space-saving, and highly efficient bike wash solution. Ideal for small workshops and start-ups, it provides an automated wash with minimal human intervention.</p><h4>Technical Specifications</h4><ul><li>Size of Machine: L 4.6m x W 2.6m x H 2.4m</li><li>Weight of equipment: 800kg</li><li>Wash time: 2-3 Min</li><li>Material: Open type structure</li><li>Motor power & Voltage: 3 Phase, 7.5HP</li><li>Power requirement: 3 Phase, 10HP</li><li>Pressure Capacity: 25-30bar</li><li>Control Panel: PLC control panel with push button</li><li>Water recycling system: Not included</li><li>Brushes: Optional</li><li>Air dryer: Optional</li><li>Vehicle counting system: Optional</li></ul>`
    },
    'MBW Classic Model - 102': {
        title: 'MBW Classic Model - 102',
        content: `<p>The Classic Model is similar to the Basic Model but with an added advantage—it features a semi-closed system. This semi-enclosed design provides better control over the washing process, preventing water from splashing outside the wash area. Like the Basic Model, it efficiently moves the boom system with the help of conveyor belt for an automated wash, reducing 95% of labor work. The Classic Model is ideal for businesses looking for enhanced efficiency with a more contained and cleaner operation.</p><h4>Technical Specifications</h4><ul><li>Size of Machine: L 4.6m x W 3.1m x H 2.4m</li><li>Weight of equipment: 800kg</li><li>Wash time: 2-3 Min</li><li>Material: Semi-closed type structure</li><li>Motor power & Voltage: 3 Phase, 7.5HP</li><li>Power requirement: 3 Phase, 10HP</li><li>Pressure Capacity: 25-30bar</li><li>Control Panel: PLC control panel with push button</li><li>Water recycling system: Not included</li><li>Brushes: Optional</li><li>Air dryer: Optional</li><li>Vehicle counting system: Optional</li></ul>`
    },
    'Premium MBW Model – 101': {
        title: 'Premium MBW Model – 101',
        content: `<p>The Premium Model is the top-tier solution in our automatic bike wash range, offering a fully enclosed, and high-performance system. This model is designed for those seeking the highest level of efficiency, safety, and eco-friendliness in their bike wash operations. The fully enclosed structure ensures that the entire washing process is contained within the system, reducing water splashes, noise, and environmental impact.</p><h4>Technical Specifications</h4><ul><li>Size of Machine: L 4.6m x W 3.1m x H 2.4m</li><li>Weight of equipment: 1000kg</li><li>Wash time: 2-3 Min</li><li>Material: Closed type structure</li><li>Motor power & Voltage: 3 Phase, 7.5HP</li><li>Power requirement: 3 Phase, 10HP</li><li>Pressure Capacity: 25-30bar</li><li>Control Panel: PLC control panel with HMI</li><li>Water recycling system: Included</li><li>Brushes: Optional</li><li>Air dryer: Optional</li><li>Vehicle counting system: Optional</li></ul>`
    },
    'Water Tube Model': {
        title: 'Water Tube Model',
        content: `<p>Our most advanced system, the Water Tube Model, is a tunnel-type bike wash system. It features two rotating brushes and dryers, offering the most thorough clean. With a water recycling system and options for bike entry and exit, this model is perfect for high-traffic areas or large-scale operations. This system does not require the bike to be fully placed inside the machine. Instead, the first tire of the bike is positioned at the entrance, and the handle is secured in place. The bike is then pulled through the washing tunnel for a fully automated, hands-free cleaning experience.</p><h4>Technical Specifications</h4><ul><li>Size of Machine: L 5.5m x W 3.1m x H 2.4m</li><li>Weight of equipment: 1000kg</li><li>Wash time: 2-3 Min</li><li>Material: Closed type structure</li><li>Motor power & Voltage: 3 Phase, 7.5HP</li><li>Power requirement: 3 Phase, 10HP</li><li>Pressure Capacity: 25-30bar</li><li>Control Panel: PLC control panel with HMI system</li><li>Water recycling system: Included</li><li>Brushes: Included</li><li>Air dryer: Included</li><li>Vehicle counting system: Optional</li></ul>`
    },
    'Blue Box Bike Wash System': {
        title: 'Blue Box Bike Wash System',
        content: `<p>This system features a fully closed blue box design, providing a controlled environment for washing bikes. The bike enters from one side using a ramp, making it easy to drive in. Inside, there’s a 360 boom that moves around the bike, ensuring a thorough clean from every angle. It has 2 separate entry and exist points, once the cycles done it drives straight out. What’s really cool about this system is the two transparent doors at the front. They allow you to see the entire washing process, adding a touch of transparency to the operation.</p>`
    },
    '360 Bike Wash': {
        title: '360 Bike Wash',
        content: `<p>This innovative system offers a complete wash from all angles, ensuring that every part of the bike gets the attention it deserves. The bike remains stationary while specialized washing components move around it in a circular motion. Equipped with powerful high-pressure water jets, the 360 Bike Wash System removes dirt, mud, and grime from every part of the bike. The jets are strategically positioned to reach every angle, ensuring that no spot is missed.</p><h4>Technical Specifications</h4><ul><li>Size of Machine without ramp: L 3.5m x W 2.4m x H 2.4m</li><li>Weight of equipment: 800kg</li><li>Arm: Single arm with 360 rotation</li><li>Wash time: 2-3 Min</li><li>Material: Open type structure</li><li>Motor power & Voltage: 3 Phase, 7.5HP</li><li>Power requirement: 3 Phase, 10HP</li><li>Pressure Capacity: 25-30bar</li><li>Control Panel: PLC control panel with push button</li><li>Water recycling system: Not included</li><li>Vehicle counting system: Optional</li></ul>`
    },
    'Steady Car Wash': {
        title: 'Steady Car Wash',
        content: `
            <p>Introducing the Steady Car Wash System – a fixed washing solution designed for efficiency and reliability. This system operates with a unique design where the car moves backward and forward during the washing cycles, ensuring a thorough and effective clean.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system with fixed structure</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (10HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Dryer (Optional)</li>
            </ul>
        `
    },
    '90 Degree Rotation Wash': {
        title: '90 Degree Rotation Wash',
        content: `
            <p>This system offers a semi-automated approach, focusing on the top body of the vehicle for effective and efficient cleaning. The booms moves straight backward and forward, ensuring complete coverage of the top and sides of the vehicle.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system with double arm in 90 rotation</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (10HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Manual connection from existing pump</li>
                <li>Dryer (Optional)</li>
            </ul>
        `
    },
    'Mcw Turbo Wash': {
        title: 'Mcw Turbo Wash',
        content: `
            <p>The Turbo Model – our high-performance car wash solution designed to deliver exceptional results with its advanced 180-degree rotation feature. The Turbo Model features a state-of-the-art 180-degree rotation and an integrated under-chassis cleaning system, making it a top choice for a complete and efficient wash. The machine features a 180-degree rotation, allowing it to clean all sides of the vehicle effectively. This ensures no spot is missed, delivering a thorough wash from every angle.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system with double arm in 180 rotation</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (10HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Manual connection from existing pump</li>
            </ul>
        `
    },
    'Mcw Jet Wash': {
        title: 'Mcw Jet Wash',
        content: `
            <p>The Single Boom Model – a cutting-edge car wash system designed for superior coverage with its 360-degree rotation feature. an integrated under-chassis cleaning system, ensuring a comprehensive wash from every angle. The rotating boom covers the entire surface of the vehicle, including the sides, top, and rear, for a complete clean. The Single Boom Model is perfect for car wash centers looking for a versatile, efficient solution that provides complete coverage with advanced rotation technology.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system with single arm in 360 rotation</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (10HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Manual connection from existing pump</li>
                <li>Dryers (Optional)</li>
            </ul>
        `
    },
    'Razer X': {
        title: 'Razer X',
        content: `
            <p>the Razer X Model, the latest innovation in automatic car washing technology—combining the power of Turbo with the precision of Brush technology for an unparalleled clean. Razer X is advance version of Turbo Model. The Razer X is a fully automatic system equipped with specially designed short, steady brushes that deliver a deep and thorough clean.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system with double arm in 180 rotation</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (10HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Steady short brushes- 2Nos</li>
                <li>Manual connection from existing pump</li>
                <li>Dryers (Optional)</li>
            </ul>
        `
    },
    'Scrubber': {
        title: 'Scrubber',
        content: `
            <p>Introducing the Scrubber Model—an efficient and reliable solution designed to deliver a full-body clean with precision and care. Equipped with a 3-brush system, it ensures your vehicle receives the attention it deserves. The Scrubber’s top brush is mounted horizontally above the vehicle, providing a thorough clean to the roof and upper surfaces. With soft, durable bristles, the Scrubber's brushes are designed to protect your vehicle's paint while delivering a powerful clean—no scratches, just shine. The side brushes reach every corner of the vehicle, effectively cleaning doors, fenders, bumpers, and more, ensuring that every part of your car looks spotless.</p>
            <ul>
                <li>Water resistant long life rail structure</li>
                <li>Automatic top wash system two vertical brushes and one horizontal brush</li>
                <li>Under chassis wash system</li>
                <li>SS nozzles with SS304 material</li>
                <li>High pressure pump with electric motor (7.5HP )</li>
                <li>Automatic water and soap spray system</li>
                <li>PLC Control panel with Push button</li>
                <li>Manual connection from existing pump</li>
                <li>Dryers Included</li>
            </ul>
        `
    },
    'Automatic Bus Wash': {
        title: 'Automatic Bus Wash',
        content: `
            <p>The Automatic Bus Wash System is designed to provide a fast, thorough, and efficient cleaning solution for buses, trucks, and large commercial vehicles. This system ensures a high-quality wash with minimal labor, making it an ideal choice for public transport agencies, fleet operators, and logistics companies.</p>
            
            <h3>1) Double Brush Wash Model</h3>
            <p>The Double Brush Wash Model is a highly efficient and user-friendly automatic washing system designed for buses, trucks, and large vehicles. It features two robust, soft-bristle brushes that provide thorough and consistent cleaning.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Dual Brush Mechanism: Two vertical brushes that rotate and move along the vehicle's surface</li>
                <li>Comprehensive Cleaning: Capable of cleaning both sides and front/rear of the vehicle</li>
                <li>Compact Design: Can be installed in small spaces</li>
                <li>Durable and Low Maintenance: Built with long-lasting materials</li>
            </ul>
            
            <h3>2) Three Brush Model</h3>
            <p>The Three Brush Bus Wash Model, also known as the Scrubber Model, is designed for efficient, thorough cleaning of buses and other large vehicles. This model offers an advanced automated washing system that uses three brushes to provide comprehensive exterior cleaning.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Three Brush Configuration: Two vertical brushes for sides and one horizontal brush for roof</li>
                <li>High-Efficiency Scrubbing: Soft, durable bristles for gentle yet effective cleaning</li>
                <li>Fully Automated Operation: Simple drive-in and activate system</li>
            </ul>
        `
    },
    'Automatic Truck Wash': {
        title: 'Automatic Truck Wash System',
        content: `
            <p>The Automatic Truck Wash System is a high-performance, automated solution designed to clean large trucks, trailers, and heavy-duty vehicles with maximum efficiency. This system is perfect for fleet owners, logistics companies, public transport agencies, and service stations that require fast and effective cleaning for their large vehicles.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Tunnel-Like Efficiency: Allows trucks to pass through with minimal manual intervention</li>
                <li>Comprehensive Coverage: Full coverage of truck's surface including sides, roof, and undercarriage</li>
                <li>Ideal for both large cargo trucks and specialized vehicles</li>
            </ul>
        `
    },
    'Automatic Coach Wash System': {
        title: 'Automatic Coach Wash System',
        content: `
            <p>Ensuring clean and well-maintained coaches is essential for providing a comfortable and hygienic experience for passengers. The Automatic Coach Wash System is a significant step in this direction, offering an efficient, multistage cleaning solution for trains and metro coaches.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Multistage Cleaning: Uses high-pressure water jets and rotating brushes</li>
                <li>Thorough Exterior Cleaning: Washes lateral sides, projected window bars, and window sill areas</li>
                <li>High Efficiency: Can clean multiple coaches in a single cycle</li>
            </ul>
        `
    },
    'Bogie Wash System': {
        title: 'Automatic Bogie Wash System',
        content: `
            <p>The Bogie Wash System plays a crucial role in maintaining the large fleet of Indian Railways' LHB coaches, which are overhauled approximately every 18 months or after running around 2 lakh kilometers.</p>
            
            <h4>Purpose:</h4>
            <p>Before overhauling, it is essential to thoroughly clean the bogies to remove accumulated muck, oil, soil, and other debris. This cleaning ensures the bogies are fully exposed to their painted surfaces, allowing for easier disassembly, inspection, and repair of the components.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Pre-Overhaul Cleaning: Cleans bogies while still on their wheels</li>
                <li>High-Pressure Cleaning: Removes tough deposits of dirt and grease</li>
                <li>Environmental Sustainability: Includes water recycling capabilities</li>
            </ul>
        `
    },
    'Leakage Test System': {
        title: 'Leakage Test System',
        content: `
            <p>The Leakage Test System is a vital solution for manufacturers across various industries to ensure the quality and integrity of their products before they reach the market.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Versatile Application: Can be used for testing various products</li>
                <li>Simulates Real-World Conditions: Replicates conditions like heavy rain and water immersion</li>
                <li>Comprehensive Testing: Examines seals, joints, and surfaces</li>
                <li>Automated Process: Offers efficient, consistent testing with detailed reports</li>
                <li>Water Recycling: Includes water recycling features for sustainability</li>
            </ul>
        `
    },
    'Coil Spring Cleaning System': {
        title: 'Coil Spring Cleaning System',
        content: `
            <p>The Coil Spring Cleaning System is designed to thoroughly clean coil springs used in various industries such as automotive, railways, and heavy machinery.</p>
            
            <h4>System Operation:</h4>
            <ul>
                <li>Loading the springs: Springs are placed on a circular bracket</li>
                <li>Conveyor Movement: Smooth transport through cleaning stages</li>
                <li>Hot Water Pressure Cleaning: Removes surface dirt and grime</li>
                <li>Chemical Cleaning Cycle: Breaks down stubborn contaminants</li>
                <li>Rinsing: Final rinse to remove cleaning agents</li>
            </ul>
            
            <h4>Key Features:</h4>
            <ul>
                <li>High-Pressure Water Cleaning</li>
                <li>Automated Process</li>
                <li>Durable and Long-Lasting</li>
                <li>Deep Cleaning Capability</li>
            </ul>
        `
    },
    'Roller Bearing Cleaning System': {
        title: 'Roller Bearing Cleaning System',
        content: `
            <p>The Roller Bearing Cleaning System is designed to provide an efficient, automated cleaning process for roller bearings, ensuring they are free from contaminants.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>High-Pressure Cleaning: Removes dirt and grease effectively</li>
                <li>Chemical Cleaning: Breaks down oils and tough residues</li>
                <li>Hot Water Rinse: Ensures thorough removal of cleaning agents</li>
                <li>Quality Control Integration: Automated inspection systems</li>
            </ul>
        `
    },
    'High Pressure Washer': {
        title: 'High Pressure Wash System',
        content: `
            <p>A High Pressure Washer is a versatile cleaning tool that uses high-pressure water spray to remove dirt, grime, grease, mold, and other stubborn substances from various surfaces.</p>
            
            <h3>Available Models:</h3>
            
            <h4>a) HPRS 120 Bar – Single Phase – 3 HP</h4>
            <p>Ideal for locations without three-phase power supply. Perfect for cleaning bikes and cars.</p>
            
            <h4>b) HPRS 150 Bar – 3 Phase – 5 HP</h4>
            <p>More powerful model with 150 bars pressure, perfect for tougher cleaning jobs.</p>
            
            <h4>c) HPRS 150 Bar – 3 Phase – 5 HP – with Dual Outlet</h4>
            <p>Features double outlet for simultaneous cleaning of multiple vehicles.</p>
            
            <h4>d) HPRS 200 Bar – 3 Phase – 5 HP</h4>
            <p>Designed for heavy vehicles like trucks and tractors with 200 bars pressure.</p>
            
            <h4>e) HPRS 350 Bar – 3 Phase – 5 HP</h4>
            <p>Most powerful model for heavy-duty vehicles like trucks, tractors, railway coaches, and bogies.</p>
        `
    },
    'Under Body Wash System': {
        title: 'Under Body Wash System',
        content: `
            <h3>a) Steady under Chassis</h3>
            <p>Fixed system with 7.5 HP pump and 12 nozzles for thorough under-body cleaning. The car moves backward and forward during the wash.</p>
            
            <h3>b) Movable under Chassis</h3>
            <p>Flexible system with 7.5 HP pump and conveyor belt that moves the washing system back and forth while the vehicle stays in place.</p>
        `
    },
    'Toilet Cleaning System': {
        title: 'Hospitality Cleaning System',
        content: `
            <p>Our Automatic Toilet Cleaning System is designed to ensure hygienic, efficient, and consistent cleaning of toilets, eliminating the need for manual cleaning while maintaining high standards of cleanliness and sanitation.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Ideal for schools, especially girls' schools</li>
                <li>Eliminates need for male intervention in school restrooms</li>
                <li>Suitable for public and private facilities</li>
                <li>Perfect for office buildings, airports, hospitals, and malls</li>
            </ul>
        `
    }
}; 