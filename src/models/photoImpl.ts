import {Photo} from './photo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhotoImpl implements AdditionalDataHolder, Parsable, Photo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Camera manufacturer. Read-only. */
    public cameraMake?: string | undefined;
    /** Camera model. Read-only. */
    public cameraModel?: string | undefined;
    /** The denominator for the exposure time fraction from the camera. Read-only. */
    public exposureDenominator?: number | undefined;
    /** The numerator for the exposure time fraction from the camera. Read-only. */
    public exposureNumerator?: number | undefined;
    /** The F-stop value from the camera. Read-only. */
    public fNumber?: number | undefined;
    /** The focal length from the camera. Read-only. */
    public focalLength?: number | undefined;
    /** The ISO value from the camera. Read-only. */
    public iso?: number | undefined;
    /** The orientation value from the camera. Writable on OneDrive Personal. */
    public orientation?: number | undefined;
    /** The date and time the photo was taken in UTC time. Read-only. */
    public takenDateTime?: Date | undefined;
    /**
     * Instantiates a new photo and sets the default values.
     * @param photoParameterValue 
     */
    public constructor(photoParameterValue?: Photo | undefined) {
        this.additionalData = photoParameterValue?.additionalData ? photoParameterValue?.additionalData! : {}
        this.cameraMake = photoParameterValue?.cameraMake ;
        this.cameraModel = photoParameterValue?.cameraModel ;
        this.exposureDenominator = photoParameterValue?.exposureDenominator ;
        this.exposureNumerator = photoParameterValue?.exposureNumerator ;
        this.fNumber = photoParameterValue?.fNumber ;
        this.focalLength = photoParameterValue?.focalLength ;
        this.iso = photoParameterValue?.iso ;
        this.orientation = photoParameterValue?.orientation ;
        this.takenDateTime = photoParameterValue?.takenDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cameraMake": n => { this.cameraMake = n.getStringValue(); },
            "cameraModel": n => { this.cameraModel = n.getStringValue(); },
            "exposureDenominator": n => { this.exposureDenominator = n.getNumberValue(); },
            "exposureNumerator": n => { this.exposureNumerator = n.getNumberValue(); },
            "fNumber": n => { this.fNumber = n.getNumberValue(); },
            "focalLength": n => { this.focalLength = n.getNumberValue(); },
            "iso": n => { this.iso = n.getNumberValue(); },
            "orientation": n => { this.orientation = n.getNumberValue(); },
            "takenDateTime": n => { this.takenDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.cameraMake){
        writer.writeStringValue("cameraMake", this.cameraMake);
        }
        if(this.cameraModel){
        writer.writeStringValue("cameraModel", this.cameraModel);
        }
        if(this.exposureDenominator){
        writer.writeNumberValue("exposureDenominator", this.exposureDenominator);
        }
        if(this.exposureNumerator){
        writer.writeNumberValue("exposureNumerator", this.exposureNumerator);
        }
        if(this.fNumber){
        writer.writeNumberValue("fNumber", this.fNumber);
        }
        if(this.focalLength){
        writer.writeNumberValue("focalLength", this.focalLength);
        }
        if(this.iso){
        writer.writeNumberValue("iso", this.iso);
        }
        if(this.orientation){
        writer.writeNumberValue("orientation", this.orientation);
        }
        if(this.takenDateTime){
        writer.writeDateValue("takenDateTime", this.takenDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
