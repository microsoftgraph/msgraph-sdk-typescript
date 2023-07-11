import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Photo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Camera manufacturer. Read-only.
     */
    cameraMake?: string | undefined;
    /**
     * Camera model. Read-only.
     */
    cameraModel?: string | undefined;
    /**
     * The denominator for the exposure time fraction from the camera. Read-only.
     */
    exposureDenominator?: number | undefined;
    /**
     * The numerator for the exposure time fraction from the camera. Read-only.
     */
    exposureNumerator?: number | undefined;
    /**
     * The F-stop value from the camera. Read-only.
     */
    fNumber?: number | undefined;
    /**
     * The focal length from the camera. Read-only.
     */
    focalLength?: number | undefined;
    /**
     * The ISO value from the camera. Read-only.
     */
    iso?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The orientation value from the camera. Writable on OneDrive Personal.
     */
    orientation?: number | undefined;
    /**
     * Represents the date and time the photo was taken. Read-only.
     */
    takenDateTime?: Date | undefined;
}
