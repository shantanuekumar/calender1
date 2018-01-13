var myCal = angular
                    .module("myModule",[])
                    .filter("myFilter",[])
                    .controller("changeMonth",function($scope,$filter) {
                        var date = new Date();
                        $scope.month = $filter('date')(date, 'MMMM');//December-November like
                        $scope.day = $filter('date')(date, 'dd'); //01-31 like
                        $scope.year = $filter('date')(date, 'yyyy');
                        $scope.cdate = date.getMonth()+1;
                        $scope.element = {
                            val: $scope.cdate,
                            month: $scope.month,
                            year: $scope.year
                        }
                        $scope.decrement = function () {

                            var element = $scope.element;
                            element.val--;
                            if (element.val < 1) {
                                element.val = 12;
                                element.year--;
                            }
                            switch (element.val) {
                                case 1:
                                    element.month = "january";
                                    break;
                                case 2:
                                    element.month = "february";
                                    break;
                                case 3:
                                    element.month = "march";
                                    break;
                                case 4:
                                    element.month = "april";
                                    break;
                                case 5:
                                    element.month = "may";
                                    break;
                                case 6:
                                    element.month = "june";
                                    break;
                                case 7:
                                    element.month = "july";
                                    break;
                                case 8:
                                    element.month = "august";
                                    break;
                                case 9:
                                    element.month = "september";
                                    break;
                                case 10:
                                    element.month = "october";
                                    break;
                                case 11:
                                    element.month = "november";
                                    break;
                                case 12:
                                    element.month = "december"
                                    element.val = 12;
                                    break;
                                default:
                                    break;
                            }

                            $scope.element = element;
                            return element;
                        }

                        $scope.increment = function () {


                            var element = $scope.element;
                            element.val++;
                            if (element.val > 12) {
                                element.val = 1;
                                element.year++;
                            }
                            switch (element.val) {
                                case 1:
                                    element.month = "january";
                                    break;
                                case 2:
                                    element.month = "february";
                                    break;
                                case 3:
                                    element.month = "march";
                                    break;
                                case 4:
                                    element.month = "april";
                                    break;
                                case 5:
                                    element.month = "may";
                                    break;
                                case 6:
                                    element.month = "june";
                                    break;
                                case 7:
                                    element.month = "july";
                                    break;
                                case 8:
                                    element.month = "august";
                                    break;
                                case 9:
                                    element.month = "september";
                                    break;
                                case 10:
                                    element.month = "october";
                                    break;
                                case 11:
                                    element.month = "november";
                                    break;
                                case 12:
                                    element.month = "december";
                                    break;
                                default:
                                    break;
                            }
                            $scope.element = element;
                            return element;
                        }


                        $scope.increase =function(){
                            var element = $scope.element;
                               if(element.val % 2 == 0){
                                   $scope.incr();
                                   $scope.incr();
                                   $scope.incr();
                                   $scope.incr();
                                   $scope.incr();
                               }
                               else{
                                   $scope.incr();
                                   $scope.incr();
                                   $scope.incr();
                                   $scope.incr();

                               }



                            return ($scope.element);
                        }
                        $scope.decrease =function(){
                            var element = $scope.element;
                            if(element.val%2==0){
                                    $scope.decr();
                                    $scope.decr();
                                    $scope.decr();
                                    $scope.decr();
                                    $scope.decr();
                                }

                                else{
                                    $scope.decr();
                                    $scope.decr();
                                    $scope.decr();
                                    $scope.decr();
                                }

                            return ($scope.element);

                        }










                        var cool;
                        var bool;
                        var date = new Date();
                        $scope.day = date.getDay() + 1;
                        $scope.daynum = date.getDate();
                        $scope.year = date.getFullYear();
                        $scope.monthnum = date.getMonth() + 1;
                        $scope.ele = [23, 24, 25, 26, 27, 28, 29];
                        $scope.leapYear = 0;
                        if ($scope.year % 4 == 0 && $scope.year % 400 == 0 && $scope.year % 100 == 0) {
                            $scope.leapYear = 1;
                        }
                        else if ($scope.year % 4 == 0 && $scope.year % 100 != 0) {
                            $scope.leapYear = 1;
                        }
                        else {
                            $scope.leapYear = 0;
                        }
                        if ($scope.leapYear) {
                            if ($scope.monthnum == 2) {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 29 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }
                            else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }
                            else {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }
                            return $scope.ele;
                        }
                        else {
                            if ($scope.monthnum == 2) {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 30 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }
                            else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 31 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }
                            else {
                                switch ($scope.day) {
                                    case 1:
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 2:
                                        $scope.daynum = $scope.daynum - 1;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                    case 3:
                                        $scope.daynum = $scope.daynum - 2;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 4:
                                        $scope.daynum = $scope.daynum - 3;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 5:
                                        $scope.daynum = $scope.daynum - 4;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 6:
                                        $scope.daynum = $scope.daynum - 5;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;
                                    case 7:
                                        $scope.daynum = $scope.daynum - 6;
                                        for (i = 0; i < 7; i++) {
                                            $scope.ele[i] = $scope.daynum++;
                                            if ($scope.daynum % 32 == 0) {
                                                $scope.daynum = 1;
                                            }
                                        }
                                        break;

                                }
                            }


                        }
                        ;

                        $scope.decr = function () {
                            if ($scope.leapYear) {
                                if ($scope.monthnum == 2) {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0) {
                                            var k = 31;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return $scope.ele;

                                        }
                                    }


                                }
                                else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0) {
                                            var k = 31;
                                            while (i == 0) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return $scope.ele;

                                        }
                                    }


                                }
                                else {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0 && ($scope.monthnum == 8 || $scope.monthnum == 1)) {
                                            var k = 31;
                                            while (i == 0) {

                                                $scope.ele[i--] = k--;

                                            }
                                            if ($scope.monthnum == 1) {
                                                $scope.year--;
                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return ($scope.ele, $scope.element);

                                        }
                                        if ($scope.ele[i] == 0 && $scope.monthnum == 3) {
                                            var k = 29;
                                            while (i == 0) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return ($scope.ele, $scope.element);
                                        }
                                        if ($scope.ele[i] == 0 && ($scope.monthnum == 5 || $scope.monthnum == 7 || $scope.monthnum == 10 || $scope.monthnum == 12)) {
                                            var k = 30;
                                            while (i == 0) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return ($scope.ele, $scope.element);
                                        }
                                    }
                                }
                                return ($scope.ele, $scope.element);
                            }
                            else {
                                if ($scope.monthnum == 2) {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0) {
                                            var k = 31;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            cool = 1;
                                            return ($scope.ele, $scope.element);

                                        }
                                    }


                                }
                                else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0) {
                                            var k = 31;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;

                                            console.log("decr 30 :" + $scope.monthnum);
                                            cool = 1;
                                            return ($scope.ele, $scope.decrement());

                                        }
                                    }


                                }
                                else {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] < 7)) {
                                        var l = $scope.ele[0]--;
                                        for (i = 6; i >= 0; i--) {
                                            $scope.ele[i] = $scope.ele[0]--;
                                        }
                                        cool = 0;
                                        return $scope.ele[i];
                                    }
                                    for (i = 6; i >= 0; i--) {
                                        $scope.ele[i] = $scope.ele[i] - 7;
                                        if ($scope.ele[i] == 0 && ($scope.monthnum == 8 || $scope.monthnum == 1)) {
                                            var k = 31;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            if ($scope.monthnum == 1) {
                                                $scope.year--;
                                            }
                                            $scope.monthnum -= 1;

                                            console.log("decr 1,8 :" + $scope.monthnum);

                                            cool = 1;
                                            return ($scope.ele, $scope.decrement());

                                        }
                                        if ($scope.ele[i] == 0 && $scope.monthnum == 3) {
                                            var k = 28;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            $scope.decrement;
                                            console.log("decr3:" + $scope.monthnum);
                                            cool = 1;
                                            return ($scope.ele, $scope.decrement());
                                        }
                                        if ($scope.ele[i] == 0 && ($scope.monthnum == 5 || $scope.monthnum == 7 || $scope.monthnum == 10 || $scope.monthnum == 12 )) {
                                            var k = 30;
                                            while (i != -1) {

                                                $scope.ele[i--] = k--;

                                            }
                                            $scope.monthnum -= 1;
                                            $scope.decrement;
                                            console.log("decr 5,7,10,12:" + $scope.monthnum);
                                            cool = 1;
                                            return ($scope.ele, $scope.decrement());
                                        }
                                    }
                                }
                                return ($scope.ele, $scope.decrement,$scope.set());
                            }
                        };

                        $scope.incr = function () {
                            var ele;


                            if ($scope.leapYear) {
                                if ($scope.monthnum == 2) {
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;
                                        return ($scope.ele, $scope.increment());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if (bool == 1 && $scope.ele[6] == 31) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment());
                                        }
                                        $scope.ele[i] = ($scope.ele[i] + 7) % 29;
                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 29;
                                            ele = 1;

                                        }

                                    }
                                    if (ele == 1) {
                                        $scope.monthnum += 1;
                                        bool = 1;


                                    }
                                }
                                else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;
                                        return ($scope.ele, $scope.increment());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if ($scope.ele[6] == 31) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment());
                                        }

                                        $scope.ele[i] = ($scope.ele[i] + 7) % 30;


                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 30;
                                            ele = 1;

                                        }
                                    }
                                    if (ele == 1) {

                                        $scope.monthnum += 1;

                                        bool = 1;

                                    }


                                }
                                else {
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;
                                        return ($scope.ele, $scope.increment());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if (bool == 1 && ($scope.ele[6] == 30 || $scope.ele[6] == 29)) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment());
                                        }

                                        $scope.ele[i] = ($scope.ele[i] + 7) % 31;
                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 31;
                                            ele = 1;
                                        }


                                    }
                                    if (ele == 1) {
                                        if ($scope.monthnum < 12) {
                                            $scope.monthnum += 1;
                                            bool = 1;

                                        }
                                        else {
                                            $scope.monthnum = 1;
                                            bool = 1;

                                            $scope.year++;
                                        }

                                    }

                                }

                            }


                            else {
                                if ($scope.monthnum == 2) {
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;
                                        return ($scope.ele, $scope.increment());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if (bool == 1 && $scope.ele[6] == 31) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment());
                                        }
                                        $scope.ele[i] = ($scope.ele[i] + 7) % 28;
                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 28;
                                            ele = 1;

                                        }

                                    }
                                    if (ele == 1) {
                                        $scope.monthnum += 1;

                                        bool = 1;


                                    }
                                }
                                else if ($scope.monthnum == 4 || $scope.monthnum == 6 || $scope.monthnum == 9 || $scope.monthnum == 11) {
                                    if (cool == 1 && ($scope.ele[6] == 30 || ($scope.ele[6] >= 1 && $scope.ele[6] <= 7) )) {
                                        $scope.monthnum++;
                                        console.log("inc:" + $scope.monthnum);
                                        cool = 0;
                                    }
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;

                                        return ($scope.ele, $scope.increment(),$scope.set());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if ($scope.ele[6] == 31) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment(),$scope.set());
                                        }

                                        $scope.ele[i] = ($scope.ele[i] + 7) % 30;


                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 30;

                                            // $scope.monthnum+=1;
                                            // console.log("inc month 30:"+$scope.monthnum);
                                            ele = 1;
                                            if (i == 6) {
                                                ele = 0;
                                            }

                                        }
                                    }
                                    if (ele == 1) {

                                        $scope.monthnum += 1;
                                        console.log("inc month 30:" + $scope.monthnum);
                                        bool = 1;
                                        ele = 0;
                                    }


                                }
                                else {
                                    if (cool == 1 && ($scope.ele[6] >= 1 && $scope.ele[6] <= 7)) {
                                        $scope.monthnum++;
                                        console.log("inc:" + $scope.monthnum);
                                        cool = 0;
                                    }
                                    if (bool == 1 && $scope.ele[6] >= 1 && $scope.ele[6] <= 7) {
                                        $scope.ele[0] = $scope.ele[6] + 1;
                                        for (i = 1; i < 7; i++) {
                                            $scope.ele[i] = $scope.ele[i - 1] + 1;
                                        }
                                        bool = 0;
                                        $scope.monthnum++;
                                        console.log("inc:" + $scope.monthnum);
                                        return ($scope.ele, $scope.increment(),$scope.set());
                                    }
                                    for (i = 0; i < 7; i++) {
                                        if (bool == 1 && ($scope.ele[6] == 30 || $scope.ele[6] == 28)) {
                                            j = 0;
                                            var k = 1;
                                            while (j < 7) {

                                                $scope.ele[j++] = k++;
                                            }
                                            bool = 0;
                                            return ($scope.ele, $scope.increment(),$scope.set());
                                        }

                                        $scope.ele[i] = ($scope.ele[i] + 7) % 31;
                                        if ($scope.ele[i] == 0) {
                                            $scope.ele[i] = 31;
                                            ele = 1;
                                            if (i == 6) {
                                                ele = 0;
                                            }
                                            // $scope.monthnum+=1;
                                            // console.log("inc month 31:"+$scope.monthnum);
                                        }


                                    }
                                    if (ele == 1) {
                                        if ($scope.monthnum < 12) {
                                            $scope.monthnum += 1;
                                            console.log("inc month 31:" + $scope.monthnum);
                                            bool = 1;
                                            ele = 0;
                                        }
                                        else {
                                            $scope.monthnum = 1;
                                            ele = 0;
                                            bool = 1;
                                            $scope.year++;
                                        }

                                    }

                                }

                            }
                            return ($scope.ele,$scope.increment,$scope.set());
                        }



                       $scope.set =function(){
                           var comp = $scope.element;
                           var date = new Date();
                           datenum = date.getDate();
                           month = date.getMonth()+1;
                           day = date.getDay()+1;
                           year = date.getFullYear();
                           if(comp.month == $scope.month && comp.year == year){
                                   if(datenum==$scope.ele[day-1]){
                                       console.log("cdate"+datenum);
                                       console.log("odate"+$scope.ele[day]);
                                      return $(".days > li:nth-child(" + day + ")" ).children().addClass("active");
                                   }


                           else{
                                  return $(".days > li:nth-child(" + day + ")" ).children().removeClass("active");
                               }

                           }

                       }



                        return ($scope.ele,$scope.set());

                   })


