import type {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceVideoQuality extends Parsable, TeleconferenceDeviceMediaQuality {
    /**
     * The average inbound stream video bit rate per second.
     */
    averageInboundBitRate?: number | undefined;
    /**
     * The average inbound stream video frame rate per second.
     */
    averageInboundFrameRate?: number | undefined;
    /**
     * The average outbound stream video bit rate per second.
     */
    averageOutboundBitRate?: number | undefined;
    /**
     * The average outbound stream video frame rate per second.
     */
    averageOutboundFrameRate?: number | undefined;
}
