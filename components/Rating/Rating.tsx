import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from "react";
import StarIcon from './star.svg';
import cn from "classnames";
import styles from "./Rating.module.css";

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
      return (
        <StarIcon className={cn(styles.star, {
            [styles.filled]: index < currentRating,
          })}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      { ratingArray.map((rating: JSX.Element, index: number) => (<span key={index}>{ rating }</span>)) }
    </div>
  );
};
