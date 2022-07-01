import {createMobileAppContentFromDiscriminatorValue} from './createMobileAppContentFromDiscriminatorValue';
import {MobileAppContentImpl, MobileAppImpl} from './index';
import {MobileAppContent} from './mobileAppContent';
import {MobileLobApp} from './mobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileLobAppImpl extends MobileAppImpl implements MobileLobApp {
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
        if(value) {
            this._committedContentVersion = value;
        }
    };
    /**
     * Instantiates a new MobileLobApp and sets the default values.
     * @param mobileLobAppParameterValue 
     */
    public constructor(mobileLobAppParameterValue?: MobileLobApp | undefined) {
        super(mobileLobAppParameterValue);
        this._committedContentVersion = mobileLobAppParameterValue?.committedContentVersion;
        this._contentVersions = mobileLobAppParameterValue?.contentVersions;
        this._fileName = mobileLobAppParameterValue?.fileName;
        this._size = mobileLobAppParameterValue?.size;
    };
    /**
     * Gets the contentVersions property value. The list of content versions for this app.
     * @returns a MobileAppContentInterface
     */
    public get contentVersions() {
        return this._contentVersions;
    };
    /**
     * Sets the contentVersions property value. The list of content versions for this app.
     * @param value Value to set for the contentVersions property.
     */
    public set contentVersions(value: MobileAppContent[] | undefined) {
        if(value) {
            const contentVersionsArrValue: MobileAppContentImpl[] = [];
            this.contentVersions?.forEach(element => {
                contentVersionsArrValue.push((element instanceof MobileAppContentImpl? element as MobileAppContentImpl:new MobileAppContentImpl(element)));
            });
            this._contentVersions = contentVersionsArrValue;
        }
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
        if(value) {
            this._fileName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "committedContentVersion": n => { this.committedContentVersion = n.getStringValue(); },
            "contentVersions": n => { this.contentVersions = n.getCollectionOfObjectValues<MobileAppContentImpl>(createMobileAppContentFromDiscriminatorValue); },
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
        if(this.committedContentVersion){
            writer.writeStringValue("committedContentVersion", this.committedContentVersion);
        }
        if(this.contentVersions && this.contentVersions.length != 0){        const contentVersionsArrValue: MobileAppContentImpl[] = [];
        this.contentVersions?.forEach(element => {
            contentVersionsArrValue.push((element instanceof MobileAppContentImpl? element as MobileAppContentImpl:new MobileAppContentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppContentImpl>("contentVersions", contentVersionsArrValue);
        }
        if(this.fileName){
            writer.writeStringValue("fileName", this.fileName);
        }
        if(this.size){
            writer.writeNumberValue("size", this.size);
        }
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
        if(value) {
            this._size = value;
        }
    };
}
