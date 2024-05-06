import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const cartData: Array<EcomItem> = [];
  return (
    <div className="z-20 h-16 w-full p-3 justify-between items-center flex border-b sticky top-0 bg-slate-950">
      <Link to="/">
        <h1 className="font-bold">Redux CrashCourse</h1>
      </Link>
      <div className="__buttons flex gap-4">
        <Link to="/shop">
          <Button variant="secondary">Shop</Button>
        </Link>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="flex justify-center items-center relative"
            >
              <FaShoppingCart />
              {cartData.length > 0 && (
                <p className=" flex justify-center items-center absolute top-[-9px] left-[-9px] text-xs bg-red-600 text-white w-6 h-6 aspect-square rounded-full">
                  {cartData.length}
                </p>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="flex justify-between items-center flex-col">
            <SheetHeader>
              <SheetTitle>My Shopping Cart</SheetTitle>
              <SheetDescription>
                {cartData.length === 0 ? (
                  "Your cart is empty"
                ) : (
                  <div className="max-h-[450px] overflow-auto flex flex-col gap-3">
                    {cartData.map((item) => {
                      return <CartItem data={item} />;
                    })}
                  </div>
                )}
              </SheetDescription>
            </SheetHeader>
            <div className="__cart_footer w-full flex justify-between items-center bg-slate-950">
              <p className="text-lg font-bold">
                Total: <span className="text-green-500">${123}</span>
              </p>
              <Link to="/checkout">
                <Button onClick={() => setSheetOpen(false)} variant="default">
                  Checkout
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
