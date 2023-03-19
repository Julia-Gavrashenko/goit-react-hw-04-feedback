import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification message.styled';

export const NotificationMessage = ({ message }) => (
  <>
    <Message>{message}</Message>
  </>
);

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
