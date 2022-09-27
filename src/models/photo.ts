import {ReferenceNumeric} from './referenceNumeric';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Photo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Camera manufacturer. Read-only. */
    private _cameraMake?: string | undefined;
    /** Camera model. Read-only. */
    private _cameraModel?: string | undefined;
    /** The denominator for the exposure time fraction from the camera. Read-only. */
    private _exposureDenominator?: number | string | ReferenceNumeric | undefined;
    /** The numerator for the exposure time fraction from the camera. Read-only. */
    private _exposureNumerator?: number | string | ReferenceNumeric | undefined;
    /** The F-stop value from the camera. Read-only. */
    private _fNumber?: number | string | ReferenceNumeric | undefined;
    /** The focal length from the camera. Read-only. */
    private _focalLength?: number | string | ReferenceNumeric | undefined;
    /** The ISO value from the camera. Read-only. */
    private _iso?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The orientation value from the camera. Writable on OneDrive Personal. */
    private _orientation?: number | undefined;
    /** Represents the date and time the photo was taken. Read-only. */
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
        this._additionalData = value;
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
        this._cameraMake = value;
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
        this._cameraModel = value;
    };
    /**
     * Instantiates a new photo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.photo";
    };
    /**
     * Gets the exposureDenominator property value. The denominator for the exposure time fraction from the camera. Read-only.
     * @returns a agreements
     */
    public get exposureDenominator() {
        return this._exposureDenominator;
    };
    /**
     * Sets the exposureDenominator property value. The denominator for the exposure time fraction from the camera. Read-only.
     * @param value Value to set for the exposureDenominator property.
     */
    public set exposureDenominator(value: number | string | ReferenceNumeric | undefined) {
        this._exposureDenominator = value;
    };
    /**
     * Gets the exposureNumerator property value. The numerator for the exposure time fraction from the camera. Read-only.
     * @returns a agreements
     */
    public get exposureNumerator() {
        return this._exposureNumerator;
    };
    /**
     * Sets the exposureNumerator property value. The numerator for the exposure time fraction from the camera. Read-only.
     * @param value Value to set for the exposureNumerator property.
     */
    public set exposureNumerator(value: number | string | ReferenceNumeric | undefined) {
        this._exposureNumerator = value;
    };
    /**
     * Gets the fNumber property value. The F-stop value from the camera. Read-only.
     * @returns a agreements
     */
    public get fNumber() {
        return this._fNumber;
    };
    /**
     * Sets the fNumber property value. The F-stop value from the camera. Read-only.
     * @param value Value to set for the fNumber property.
     */
    public set fNumber(value: number | string | ReferenceNumeric | undefined) {
        this._fNumber = value;
    };
    /**
     * Gets the focalLength property value. The focal length from the camera. Read-only.
     * @returns a agreements
     */
    public get focalLength() {
        return this._focalLength;
    };
    /**
     * Sets the focalLength property value. The focal length from the camera. Read-only.
     * @param value Value to set for the focalLength property.
     */
    public set focalLength(value: number | string | ReferenceNumeric | undefined) {
        this._focalLength = value;
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        this._iso = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        this._orientation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cameraMake", this.cameraMake);
        writer.writeStringValue("cameraModel", this.cameraModel);
        writer.writeNumberValue("exposureDenominator", this.exposureDenominator);
        writer.writeNumberValue("exposureNumerator", this.exposureNumerator);
        writer.writeNumberValue("fNumber", this.fNumber);
        writer.writeNumberValue("focalLength", this.focalLength);
        writer.writeNumberValue("iso", this.iso);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("orientation", this.orientation);
        writer.writeDateValue("takenDateTime", this.takenDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the takenDateTime property value. Represents the date and time the photo was taken. Read-only.
     * @returns a Date
     */
    public get takenDateTime() {
        return this._takenDateTime;
    };
    /**
     * Sets the takenDateTime property value. Represents the date and time the photo was taken. Read-only.
     * @param value Value to set for the takenDateTime property.
     */
    public set takenDateTime(value: Date | undefined) {
        this._takenDateTime = value;
    };
}
