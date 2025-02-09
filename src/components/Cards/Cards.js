import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import { Labels } from "../Labels/Labels";

export function Cards(props) {
  const {
    id,
    titleProps,
    labelProps,
    secondaryText,
    hasDivider,
    imageProps,
    description,
    firstLinkProps,
    secondLinkProps,
    hasLinkFirst,
    hasLinkSecond,
    displayColumn,
  } = props;
  let display = "flex flex-col sm:grid sm:grid-cols-2";
  let link2Padding = displayColumn ? "mt-24px" : "mt-20px ";
  return (
    // remove width after, just for testing
    <div id={id} className="rounded shadow-md flex flex-col">
      <div className="pt-20px px-24px">
        {titleProps.hasLink ? (
          <Link
            linkStyle="titleLink"
            id="cardTitle"
            text={titleProps.title}
            href={titleProps.path}
          />
        ) : (
          <p className="card-title-non-link leading-tight">
            {titleProps.title}
          </p>
        )}
        {/* Replace with Label Component */}
        <div className="mb-4">
          {labelProps !== undefined ? (
            <div className="mt-2">
              <Labels
                id={labelProps.id}
                text={labelProps.text}
                type={labelProps.type}
              />
            </div>
          ) : null}
          {secondaryText !== undefined ? (
            <p className="caption-large">{secondaryText}</p>
          ) : null}
        </div>
        {hasDivider ? <div className="horizontal-muted my-16px" /> : null}
      </div>
      {imageProps !== undefined ? (
        <>
          <Image
            className="h-200px"
            id={imageProps.id}
            alt={imageProps.altText}
            src={imageProps.imgPath}
          />
          <p className="px-24px mt-20px leading-tight card-body-text">
            {description}
          </p>
        </>
      ) : (
        <p className="px-24px leading-tight card-body-text">{description}</p>
      )}
      <div className={`mb-20px px-24px ${display}`}>
        {/* update linkStyle when stlye is created */}
        {hasLinkFirst || !titleProps.hasLink ? (
          <div className="sm:mt-24px mt-20px">
            <Link
              linkStyle="cardActionLink"
              id={firstLinkProps.id}
              text={firstLinkProps.name}
              href={firstLinkProps.path}
            />
          </div>
        ) : null}
        {hasLinkSecond ? (
          <div className={link2Padding}>
            <Link
              linkStyle="cardActionLink"
              id={secondLinkProps.id}
              text={secondLinkProps.name}
              href={secondLinkProps.path}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

Cards.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * Props for the cards title.
   * hasLink: If true creates the title as a text link (must include path)
   * title: Title of the card
   * path: path which the title link directs the user to (if hasLink is true)
   */
  titleProps: PropTypes.shape({
    hasLink: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
  }).isRequired,

  /**
   * Props for the label component within the card
   * id: id of the label component
   * text: text that displays on the label component
   * type: one of the following label types can be passed in;
   * default, primary, danger, warning, info, success
   */
  labelProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,

  /**
   * Card secondary text
   */
  secondaryText: PropTypes.string,

  /**
   * If true displays divider in card
   */
  hasDivider: PropTypes.bool,

  /**
   * Props for the cards image section
   * id: id of the image prop
   * altText: image alt text
   * imgPath: path to the image that should be displayed
   */
  imageProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
  }),

  /**
   * Card discription
   */
  description: PropTypes.string.isRequired,

  /**
   * Props for the cards first action link
   * id: id of the first link
   * name: name of the link
   * path: path which the link directs the user to
   */
  firstLinkProps: PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),

  /**
   * If true will display the first link prop
   * Must also pass into firstLinkProps with its required props
   */
  hasLinkFirst: PropTypes.bool,

  /**
   * Props for the cards second action link
   * id: id of the second link
   * name: name of the link
   * path: path which the link directs the user to
   */
  secondLinkProps: PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),

  /**
   * If true will display the second link prop
   * Must also pass into secondLinkProps with its required props
   */
  hasLinkSecond: PropTypes.bool,
};
