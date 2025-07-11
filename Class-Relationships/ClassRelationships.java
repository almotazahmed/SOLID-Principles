import java.util.*;

// 1. ASSOCIATION - "uses" relationship
class Teacher {
  private String name;
  
  public Teacher(String name) {
      this.name = name;
  }
  
  public void teach(Student student) {
      System.out.println(name + " is teaching " + student.getName());
  }
  
  public String getName() {
      return name;
  }
}

class Student {
  private String name;
  
  public Student(String name) {
      this.name = name;
  }
  
  public String getName() {
      return name;
  }
}

// 2. AGGREGATION - "has a" relationship (weak ownership)
class Department {
  private String name;
  private List<Teacher> teachers;
  
  public Department(String name) {
      this.name = name;
      this.teachers = new ArrayList<>();
  }
  
  public void addTeacher(Teacher teacher) {
      teachers.add(teacher);
  }
  
  public void listTeachers() {
      for (Teacher teacher : teachers) {
          System.out.println("Teacher: " + teacher.getName());
      }
  }
}

// 3. COMPOSITION - "part of" relationship (strong ownership)
class Engine {
  private int horsepower;
  
  public Engine(int horsepower) {
      this.horsepower = horsepower;
  }
  
  public void start() {
      System.out.println("Engine with " + horsepower + " HP started");
  }
}

class Car {
  private String model;
  private Engine engine; // Car owns Engine
  
  public Car(String model, int horsepower) {
      this.model = model;
      this.engine = new Engine(horsepower); // Car creates and owns Engine
  }
  
  public void startCar() {
      System.out.println("Starting " + model);
      engine.start();
  }
}

// 4. INHERITANCE - "is a" relationship
abstract class Animal {
  protected String name;
  
  public Animal(String name) {
      this.name = name;
  }
  
  public abstract void makeSound();
  
  public void sleep() {
      System.out.println(name + " is sleeping");
  }
  
  public String getName() {
      return name;
  }
}

class Dog extends Animal { // Dog IS AN Animal
  public Dog(String name) {
      super(name);
  }
  
  @Override
  public void makeSound() {
      System.out.println(name + " barks: Woof!");
  }
  
  public void fetch() {
      System.out.println(name + " fetches the ball");
  }
}

class Cat extends Animal { // Cat IS AN Animal
  public Cat(String name) {
      super(name);
  }
  
  @Override
  public void makeSound() {
      System.out.println(name + " meows: Meow!");
  }
  
  public void climb() {
      System.out.println(name + " climbs the tree");
  }
}

// 5. INTERFACE IMPLEMENTATION - Java's way of multiple inheritance
interface Flyable {
  void fly();
}

interface Swimmable {
  void swim();
}

class Duck extends Animal implements Flyable, Swimmable {
  public Duck(String name) {
      super(name);
  }
  
  @Override
  public void makeSound() {
      System.out.println(name + " quacks: Quack!");
  }
  
  @Override
  public void fly() {
      System.out.println(name + " is flying in the sky");
  }
  
  @Override
  public void swim() {
      System.out.println(name + " is swimming in water");
  }
}

// 6. DEPENDENCY - temporary "uses" relationship
class Database {
  public static void saveData(String data) {
      System.out.println("Saving data: " + data);
  }
}

class UserService {
  public void createUser(String username) {
      // UserService depends on Database temporarily
      String userData = "Username: " + username + ", Created: 2024-01-01";
      Database.saveData(userData);
      System.out.println("User " + username + " created");
  }
}

// 7. REALIZATION/IMPLEMENTATION - implementing an interface
interface Shape {
  double area();
  double perimeter();
}

class Rectangle implements Shape {
  private double width;
  private double height;
  
  public Rectangle(double width, double height) {
      this.width = width;
      this.height = height;
  }
  
  @Override
  public double area() {
      return width * height;
  }
  
  @Override
  public double perimeter() {
      return 2 * (width + height);
  }
}

class Circle implements Shape {
  private double radius;
  
  public Circle(double radius) {
      this.radius = radius;
  }
  
  @Override
  public double area() {
      return Math.PI * radius * radius;
  }
  
  @Override
  public double perimeter() {
      return 2 * Math.PI * radius;
  }
}

// 8. NESTED CLASSES - containment relationship
class University {
  private String name;
  private List<Student> students;
  
  public University(String name) {
      this.name = name;
      this.students = new ArrayList<>();
  }
  
  // Inner class
  public class Student {
      private String name;
      private String studentId;
      
      public Student(String name, String studentId) {
          this.name = name;
          this.studentId = studentId;
      }
      
      public void study() {
          System.out.println(name + " is studying at " + University.this.name);
      }
      
      public String getName() {
          return name;
      }
  }
  
  // Static nested class
  public static class Course {
      private String courseName;
      private String courseCode;
      
      public Course(String courseName, String courseCode) {
          this.courseName = courseName;
          this.courseCode = courseCode;
      }
      
      public void displayCourse() {
          System.out.println("Course: " + courseName + " (" + courseCode + ")");
      }
  }
  
  public Student enrollStudent(String name, String studentId) {
      Student student = new Student(name, studentId);
      students.add(student);
      return student;
  }
}

// 9. POLYMORPHISM - using inheritance relationships
class AnimalShelter {
  public void makeAllAnimalsSound(List<Animal> animals) {
      for (Animal animal : animals) {
          animal.makeSound(); // Polymorphic behavior
      }
  }
}

// 10. GENERIC RELATIONSHIPS - type parameters
class Container<T> {
  private List<T> items;
  
  public Container() {
      this.items = new ArrayList<>();
  }
  
  public void addItem(T item) {
      items.add(item);
  }
  
  public T getItem(int index) {
      return items.get(index);
  }
  
  public int size() {
      return items.size();
  }
}

// Main class to demonstrate all relationships
public class ClassRelationships {
  public static void main(String[] args) {
      System.out.println("=== Association ===");
      Teacher teacher = new Teacher("Ms. Smith");
      Student student = new Student("Alice");
      teacher.teach(student);
      
      System.out.println("\n=== Aggregation ===");
      Department dept = new Department("Computer Science");
      dept.addTeacher(new Teacher("Dr. Brown"));
      dept.listTeachers();
      
      System.out.println("\n=== Composition ===");
      Car car = new Car("Honda Civic", 150);
      car.startCar();
      
      System.out.println("\n=== Inheritance ===");
      Dog dog = new Dog("Buddy");
      Cat cat = new Cat("Whiskers");
      dog.makeSound();
      dog.fetch();
      cat.makeSound();
      cat.climb();
      
      System.out.println("\n=== Interface Implementation ===");
      Duck duck = new Duck("Donald");
      duck.makeSound();
      duck.fly();
      duck.swim();
      duck.sleep();
      
      System.out.println("\n=== Dependency ===");
      UserService service = new UserService();
      service.createUser("john_doe");
      
      System.out.println("\n=== Interface Realization ===");
      Rectangle rect = new Rectangle(5, 3);
      Circle circle = new Circle(4);
      System.out.println("Rectangle area: " + rect.area());
      System.out.println("Circle area: " + String.format("%.2f", circle.area()));
      
      System.out.println("\n=== Nested Classes ===");
      University uni = new University("MIT");
      University.Student uniStudent = uni.enrollStudent("Bob", "12345");
      uniStudent.study();
      
      University.Course course = new University.Course("Data Structures", "CS101");
      course.displayCourse();
      
      System.out.println("\n=== Polymorphism ===");
      List<Animal> animals = Arrays.asList(dog, cat, duck);
      AnimalShelter shelter = new AnimalShelter();
      shelter.makeAllAnimalsSound(animals);
      
      System.out.println("\n=== Generic Relationships ===");
      Container<String> stringContainer = new Container<>();
      stringContainer.addItem("Hello");
      stringContainer.addItem("World");
      System.out.println("Container size: " + stringContainer.size());
      System.out.println("First item: " + stringContainer.getItem(0));
      
      Container<Integer> intContainer = new Container<>();
      intContainer.addItem(42);
      intContainer.addItem(100);
      System.out.println("Integer container first item: " + intContainer.getItem(0));
  }
}