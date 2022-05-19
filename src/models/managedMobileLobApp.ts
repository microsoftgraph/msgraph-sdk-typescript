import {createMobileAppContentFromDiscriminatorValue} from './createMobileAppContentFromDiscriminatorValue';
import {ManagedApp, MobileAppContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract base class containing properties for all managed mobile line of business apps. */
export class ManagedMobileLobApp extends ManagedApp implements Parsable {
    /** The internal committed content version. */
    private _committedContentVersion?: string | undefined;
    /** The list of content versions for this app. */
    private _contentVersions?: MobileAppContent[] | undefined;
    /** The name of the main Lob application file. */
    private _fileName?: string | undefined;
    /** The total size, including all uploaded files. */
    private _size?: number | undefined;
    /**
     * Gets the committedContentVersion property value. The internal committed content version.
     * @returns a string
     */
    public get committedContentVersion() {
        return this._committedContentVersion;
    };
    /**
     * Sets the committedContentVersion property value. The internal committed content version.
     * @param value Value to set for the committedContentVersion property.
     */
    public set committedContentVersion(value: string | undefined) {
        this._committedContentVersion = value;
    };
    /**
     * Instantiates a new managedMobileLobApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentVersions property value. The list of content versions for this app.
     * @returns a mobileAppContent
     */
    public get contentVersions() {
        return this._contentVersions;
    };
    /**
     * Sets the contentVersions property value. The list of content versions for this app.
     * @param value Value to set for the contentVersions property.
     */
    public set contentVersions(value: MobileAppContent[] | undefined) {
        this._contentVersions = value;
    };
    /**
     * Gets the fileName property value. The name of the main Lob application file.
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. The name of the main Lob application file.
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "committedContentVersion": n => { this.committedContentVersion = n.getStringValue(); },
            "contentVersions": n => { this.contentVersions = n.getCollectionOfObjectValues<MobileAppContent>(createMobileAppContentFromDiscriminatorValue); },
            "fileName": n => { this.fileName = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("committedContentVersion", this.committedContentVersion);
        writer.writeCollectionOfObjectValues<MobileAppContent>("contentVersions", this.contentVersions);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeNumberValue("size", this.size);
    };
    /**
     * Gets the size property value. The total size, including all uploaded files.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The total size, including all uploaded files.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
