import {Photo} from './photo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhotoImpl implements Photo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Camera manufacturer. Read-only. */
    private _cameraMake?: string | undefined;
    /** Camera model. Read-only. */
    private _cameraModel?: string | undefined;
    /** The denominator for the exposure time fraction from the camera. Read-only. */
    private _exposureDenominator?: number | undefined;
    /** The numerator for the exposure time fraction from the camera. Read-only. */
    private _exposureNumerator?: number | undefined;
    /** The F-stop value from the camera. Read-only. */
    private _fNumber?: number | undefined;
    /** The focal length from the camera. Read-only. */
    private _focalLength?: number | undefined;
    /** The ISO value from the camera. Read-only. */
    private _iso?: number | undefined;
    /** The orientation value from the camera. Writable on OneDrive Personal. */
    private _orientation?: number | undefined;
    /** The date and time the photo was taken in UTC time. Read-only. */
    private _takenDateTime?: Date | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the cameraMake property value. Camera manufacturer. Read-only.
     * @returns a string
     */
    public get cameraMake() {
        return this._cameraMake;
    };
    /**
     * Sets the cameraMake property value. Camera manufacturer. Read-only.
     * @param value Value to set for the cameraMake property.
     */
    public set cameraMake(value: string | undefined) {
        if(value) {
            this._cameraMake = value;
        }
    };
    /**
     * Gets the cameraModel property value. Camera model. Read-only.
     * @returns a string
     */
    public get cameraModel() {
        return this._cameraModel;
    };
    /**
     * Sets the cameraModel property value. Camera model. Read-only.
     * @param value Value to set for the cameraModel property.
     */
    public set cameraModel(value: string | undefined) {
        if(value) {
            this._cameraModel = value;
        }
    };
    /**
     * Instantiates a new photo and sets the default values.
     * @param photoParameterValue 
     */
    public constructor(photoParameterValue?: Photo | undefined) {
        this._additionalData = photoParameterValue?.additionalData ? photoParameterValue?.additionalData! : {};
        this._cameraMake = photoParameterValue?.cameraMake;
        this._cameraModel = photoParameterValue?.cameraModel;
        this._exposureDenominator = photoParameterValue?.exposureDenominator;
        this._exposureNumerator = photoParameterValue?.exposureNumerator;
        this._fNumber = photoParameterValue?.fNumber;
        this._focalLength = photoParameterValue?.focalLength;
        this._iso = photoParameterValue?.iso;
        this._orientation = photoParameterValue?.orientation;
        this._takenDateTime = photoParameterValue?.takenDateTime;
    };
    /**
     * Gets the exposureDenominator property value. The denominator for the exposure time fraction from the camera. Read-only.
     * @returns a double
     */
    public get exposureDenominator() {
        return this._exposureDenominator;
    };
    /**
     * Sets the exposureDenominator property value. The denominator for the exposure time fraction from the camera. Read-only.
     * @param value Value to set for the exposureDenominator property.
     */
    public set exposureDenominator(value: number | undefined) {
        if(value) {
            this._exposureDenominator = value;
        }
    };
    /**
     * Gets the exposureNumerator property value. The numerator for the exposure time fraction from the camera. Read-only.
     * @returns a double
     */
    public get exposureNumerator() {
        return this._exposureNumerator;
    };
    /**
     * Sets the exposureNumerator property value. The numerator for the exposure time fraction from the camera. Read-only.
     * @param value Value to set for the exposureNumerator property.
     */
    public set exposureNumerator(value: number | undefined) {
        if(value) {
            this._exposureNumerator = value;
        }
    };
    /**
     * Gets the fNumber property value. The F-stop value from the camera. Read-only.
     * @returns a double
     */
    public get fNumber() {
        return this._fNumber;
    };
    /**
     * Sets the fNumber property value. The F-stop value from the camera. Read-only.
     * @param value Value to set for the fNumber property.
     */
    public set fNumber(value: number | undefined) {
        if(value) {
            this._fNumber = value;
        }
    };
    /**
     * Gets the focalLength property value. The focal length from the camera. Read-only.
     * @returns a double
     */
    public get focalLength() {
        return this._focalLength;
    };
    /**
     * Sets the focalLength property value. The focal length from the camera. Read-only.
     * @param value Value to set for the focalLength property.
     */
    public set focalLength(value: number | undefined) {
        if(value) {
            this._focalLength = value;
        }
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
     * Gets the iso property value. The ISO value from the camera. Read-only.
     * @returns a integer
     */
    public get iso() {
        return this._iso;
    };
    /**
     * Sets the iso property value. The ISO value from the camera. Read-only.
     * @param value Value to set for the iso property.
     */
    public set iso(value: number | undefined) {
        if(value) {
            this._iso = value;
        }
    };
    /**
     * Gets the orientation property value. The orientation value from the camera. Writable on OneDrive Personal.
     * @returns a integer
     */
    public get orientation() {
        return this._orientation;
    };
    /**
     * Sets the orientation property value. The orientation value from the camera. Writable on OneDrive Personal.
     * @param value Value to set for the orientation property.
     */
    public set orientation(value: number | undefined) {
        if(value) {
            this._orientation = value;
        }
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
    /**
     * Gets the takenDateTime property value. The date and time the photo was taken in UTC time. Read-only.
     * @returns a Date
     */
    public get takenDateTime() {
        return this._takenDateTime;
    };
    /**
     * Sets the takenDateTime property value. The date and time the photo was taken in UTC time. Read-only.
     * @param value Value to set for the takenDateTime property.
     */
    public set takenDateTime(value: Date | undefined) {
        if(value) {
            this._takenDateTime = value;
        }
    };
}
