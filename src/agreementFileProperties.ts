import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class AgreementFileProperties extends Entity implements Parsable {
    private _createdDateTime?: Date | undefined;
    private _displayName?: string | undefined;
    private _fileData?: AgreementFileData | undefined;
    private _fileName?: string | undefined;
    private _isDefault?: boolean | undefined;
    private _isMajorVersion?: boolean | undefined;
    private _language?: string | undefined;
    /**
     * Instantiates a new agreementFileProperties and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. 
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the displayName property value. 
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the fileData property value. 
     * @returns a agreementFileData
     */
    public get fileData() {
        return this._fileData;
    };
    /**
     * Gets the fileName property value. 
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Gets the isDefault property value. 
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Gets the isMajorVersion property value. 
     * @returns a boolean
     */
    public get isMajorVersion() {
        return this._isMajorVersion;
    };
    /**
     * Gets the language property value. 
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as AgreementFileProperties).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as AgreementFileProperties).displayName = n.getStringValue(); }],
            ["fileData", (o, n) => { (o as unknown as AgreementFileProperties).fileData = n.getObjectValue<AgreementFileData>(AgreementFileData); }],
            ["fileName", (o, n) => { (o as unknown as AgreementFileProperties).fileName = n.getStringValue(); }],
            ["isDefault", (o, n) => { (o as unknown as AgreementFileProperties).isDefault = n.getBooleanValue(); }],
            ["isMajorVersion", (o, n) => { (o as unknown as AgreementFileProperties).isMajorVersion = n.getBooleanValue(); }],
            ["language", (o, n) => { (o as unknown as AgreementFileProperties).language = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<AgreementFileData>("fileData", this.fileData);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isMajorVersion", this.isMajorVersion);
        writer.writeStringValue("language", this.language);
    };
    /**
     * Sets the createdDateTime property value. 
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the displayName property value. 
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the fileData property value. 
     * @param value Value to set for the fileData property.
     */
    public set fileData(value: AgreementFileData | undefined) {
        this._fileData = value;
    };
    /**
     * Sets the fileName property value. 
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * Sets the isDefault property value. 
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Sets the isMajorVersion property value. 
     * @param value Value to set for the isMajorVersion property.
     */
    public set isMajorVersion(value: boolean | undefined) {
        this._isMajorVersion = value;
    };
    /**
     * Sets the language property value. 
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
}
