import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The fileName property */
    private _fileName?: string | undefined;
    /** The filePath property */
    private _filePath?: string | undefined;
    /** The filePublisher property */
    private _filePublisher?: string | undefined;
    /** The fileSize property */
    private _fileSize?: number | undefined;
    /** The issuer property */
    private _issuer?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The sha1 property */
    private _sha1?: string | undefined;
    /** The sha256 property */
    private _sha256?: string | undefined;
    /** The signer property */
    private _signer?: string | undefined;
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
     * Instantiates a new fileDetails and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fileName property value. The fileName property
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. The fileName property
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * Gets the filePath property value. The filePath property
     * @returns a string
     */
    public get filePath() {
        return this._filePath;
    };
    /**
     * Sets the filePath property value. The filePath property
     * @param value Value to set for the filePath property.
     */
    public set filePath(value: string | undefined) {
        this._filePath = value;
    };
    /**
     * Gets the filePublisher property value. The filePublisher property
     * @returns a string
     */
    public get filePublisher() {
        return this._filePublisher;
    };
    /**
     * Sets the filePublisher property value. The filePublisher property
     * @param value Value to set for the filePublisher property.
     */
    public set filePublisher(value: string | undefined) {
        this._filePublisher = value;
    };
    /**
     * Gets the fileSize property value. The fileSize property
     * @returns a int64
     */
    public get fileSize() {
        return this._fileSize;
    };
    /**
     * Sets the fileSize property value. The fileSize property
     * @param value Value to set for the fileSize property.
     */
    public set fileSize(value: number | undefined) {
        this._fileSize = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fileName": n => { this.fileName = n.getStringValue(); },
            "filePath": n => { this.filePath = n.getStringValue(); },
            "filePublisher": n => { this.filePublisher = n.getStringValue(); },
            "fileSize": n => { this.fileSize = n.getNumberValue(); },
            "issuer": n => { this.issuer = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sha1": n => { this.sha1 = n.getStringValue(); },
            "sha256": n => { this.sha256 = n.getStringValue(); },
            "signer": n => { this.signer = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuer property value. The issuer property
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The issuer property
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        this._issuer = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("fileName", this.fileName);
        writer.writeStringValue("filePath", this.filePath);
        writer.writeStringValue("filePublisher", this.filePublisher);
        writer.writeNumberValue("fileSize", this.fileSize);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("sha1", this.sha1);
        writer.writeStringValue("sha256", this.sha256);
        writer.writeStringValue("signer", this.signer);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sha1 property value. The sha1 property
     * @returns a string
     */
    public get sha1() {
        return this._sha1;
    };
    /**
     * Sets the sha1 property value. The sha1 property
     * @param value Value to set for the sha1 property.
     */
    public set sha1(value: string | undefined) {
        this._sha1 = value;
    };
    /**
     * Gets the sha256 property value. The sha256 property
     * @returns a string
     */
    public get sha256() {
        return this._sha256;
    };
    /**
     * Sets the sha256 property value. The sha256 property
     * @param value Value to set for the sha256 property.
     */
    public set sha256(value: string | undefined) {
        this._sha256 = value;
    };
    /**
     * Gets the signer property value. The signer property
     * @returns a string
     */
    public get signer() {
        return this._signer;
    };
    /**
     * Sets the signer property value. The signer property
     * @param value Value to set for the signer property.
     */
    public set signer(value: string | undefined) {
        this._signer = value;
    };
}