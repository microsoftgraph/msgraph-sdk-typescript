import {BookingType} from './bookingType';
import {Place} from './place';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Room extends Parsable, Place {
    /**
     * Specifies the name of the audio device in the room.
     */
    audioDeviceName?: string | undefined;
    /**
     * Type of room. Possible values are standard, and reserved.
     */
    bookingType?: BookingType | undefined;
    /**
     * Specifies the building name or building number that the room is in.
     */
    building?: string | undefined;
    /**
     * Specifies the capacity of the room.
     */
    capacity?: number | undefined;
    /**
     * Specifies the name of the display device in the room.
     */
    displayDeviceName?: string | undefined;
    /**
     * Email address of the room.
     */
    emailAddress?: string | undefined;
    /**
     * Specifies a descriptive label for the floor, for example, P.
     */
    floorLabel?: string | undefined;
    /**
     * Specifies the floor number that the room is on.
     */
    floorNumber?: number | undefined;
    /**
     * Specifies whether the room is wheelchair accessible.
     */
    isWheelChairAccessible?: boolean | undefined;
    /**
     * Specifies a descriptive label for the room, for example, a number or name.
     */
    label?: string | undefined;
    /**
     * Specifies a nickname for the room, for example, 'conf room'.
     */
    nickname?: string | undefined;
    /**
     * Specifies additional features of the room, for example, details like the type of view or furniture type.
     */
    tags?: string[] | undefined;
    /**
     * Specifies the name of the video device in the room.
     */
    videoDeviceName?: string | undefined;
}
