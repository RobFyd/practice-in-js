import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'core/widgets.dart';

class HomePage extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MyScaffold(
            backgroundColor: Colors.white,
            backgroundImage: Image.asset('assets/images/background.png'),
            children: [
                SizedBox(height: 200),
                Text(
                    'Welcome to Flutter',
                    style: GoogleFonts.pacifico(
                        fontSize: 40,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                    ),
                ),
                SizedBox(height: 20),
                Text("A framework for building mobile applications using the Dart language.")
                SizedBox(height: 20),
                ElevatedButton(
                    onPressed: () {},
                    child: Text('Get Started'),
                ),
                Text(
                    style: GoogleFonts.pacifico(
                        fontSize: 40,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                    ),
                ), // Text
            ],

        ); // Scaffold

    } // build

} // HomePage

