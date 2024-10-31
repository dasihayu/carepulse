import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<ButtonProps> = ({ isLoading, className, children }) => {
  return (
    <Button type="submit" className={className ?? 'shad-primary-btn w-full'} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center">
            <Image 
                src="/assets/icons/loader.svg"
                width={24}
                height={24}
                alt='loader'
                className="animate-spin"
            />
            Loading ...
        </div>
      ) : children}
    </Button>
  );
};

export default SubmitButton;
