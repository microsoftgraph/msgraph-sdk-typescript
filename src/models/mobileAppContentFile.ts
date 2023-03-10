import {Entity} from './index';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains properties for a single installer file that is associated with a given mobileAppContent version.
 */
export class MobileAppContentFile extends Entity implements Parsable {
    /** The Azure Storage URI. */
    private _azureStorageUri?: string | undefined;
    /** The time the Azure storage Uri expires. */
    private _azureStorageUriExpirationDateTime?: Date | undefined;
    /** The time the file was created. */
    private _createdDateTime?: Date | undefined;
    /** A value indicating whether the file is committed. */
    private _isCommitted?: boolean | undefined;
    /** The manifest information. */
    private _manifest?: string | undefined;
    /** the file name. */
    private _name?: string | undefined;
    /** The size of the file prior to encryption. */
    private _size?: number | undefined;
    /** The size of the file after encryption. */
    private _sizeEncrypted?: number | undefined;
    /** Contains properties for upload request states. */
    private _uploadState?: MobileAppContentFileUploadState | undefined;
    /**
     * Gets the azureStorageUri property value. The Azure Storage URI.
     * @returns a string
     */
    public get azureStorageUri() {
        return this._azureStorageUri;
    };
    /**
     * Sets the azureStorageUri property value. The Azure Storage URI.
     * @param value Value to set for the azureStorageUri property.
     */
    public set azureStorageUri(value: string | undefined) {
        this._azureStorageUri = value;
    };
    /**
     * Gets the azureStorageUriExpirationDateTime property value. The time the Azure storage Uri expires.
     * @returns a Date
     */
    public get azureStorageUriExpirationDateTime() {
        return this._azureStorageUriExpirationDateTime;
    };
    /**
     * Sets the azureStorageUriExpirationDateTime property value. The time the Azure storage Uri expires.
     * @param value Value to set for the azureStorageUriExpirationDateTime property.
     */
    public set azureStorageUriExpirationDateTime(value: Date | undefined) {
        this._azureStorageUriExpirationDateTime = value;
    };
    /**
     * Instantiates a new mobileAppContentFile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The time the file was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The time the file was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureStorageUri": n => { this.azureStorageUri = n.getStringValue(); },
            "azureStorageUriExpirationDateTime": n => { this.azureStorageUriExpirationDateTime = n.getDateValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "isCommitted": n => { this.isCommitted = n.getBooleanValue(); },
            "manifest": n => { this.manifest = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "sizeEncrypted": n => { this.sizeEncrypted = n.getNumberValue(); },
            "uploadState": n => { this.uploadState = n.getEnumValue<MobileAppContentFileUploadState>(MobileAppContentFileUploadState); },
        };
    };
    /**
     * Gets the isCommitted property value. A value indicating whether the file is committed.
     * @returns a boolean
     */
    public get isCommitted() {
        return this._isCommitted;
    };
    /**
     * Sets the isCommitted property value. A value indicating whether the file is committed.
     * @param value Value to set for the isCommitted property.
     */
    public set isCommitted(value: boolean | undefined) {
        this._isCommitted = value;
    };
    /**
     * Gets the manifest property value. The manifest information.
     * @returns a base64url
     */
    public get manifest() {
        return this._manifest;
    };
    /**
     * Sets the manifest property value. The manifest information.
     * @param value Value to set for the manifest property.
     */
    public set manifest(value: string | undefined) {
        this._manifest = value;
    };
    /**
     * Gets the name property value. the file name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. the file name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("azureStorageUri", this.azureStorageUri);
        writer.writeDateValue("azureStorageUriExpirationDateTime", this.azureStorageUriExpirationDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeBooleanValue("isCommitted", this.isCommitted);
        writer.writeStringValue("manifest", this.manifest);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
        writer.writeNumberValue("sizeEncrypted", this.sizeEncrypted);
        writer.writeEnumValue<MobileAppContentFileUploadState>("uploadState", this.uploadState);
    };
    /**
     * Gets the size property value. The size of the file prior to encryption.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size of the file prior to encryption.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the sizeEncrypted property value. The size of the file after encryption.
     * @returns a int64
     */
    public get sizeEncrypted() {
        return this._sizeEncrypted;
    };
    /**
     * Sets the sizeEncrypted property value. The size of the file after encryption.
     * @param value Value to set for the sizeEncrypted property.
     */
    public set sizeEncrypted(value: number | undefined) {
        this._sizeEncrypted = value;
    };
    /**
     * Gets the uploadState property value. Contains properties for upload request states.
     * @returns a mobileAppContentFileUploadState
     */
    public get uploadState() {
        return this._uploadState;
    };
    /**
     * Sets the uploadState property value. Contains properties for upload request states.
     * @param value Value to set for the uploadState property.
     */
    public set uploadState(value: MobileAppContentFileUploadState | undefined) {
        this._uploadState = value;
    };
}
