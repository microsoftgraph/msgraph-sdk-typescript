import {createMobileAppContentFromDiscriminatorValue} from './createMobileAppContentFromDiscriminatorValue';
import {MobileAppContentImpl, MobileAppImpl} from './index';
import {MobileAppContent} from './mobileAppContent';
import {MobileLobApp} from './mobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract base class containing properties for all mobile line of business apps. */
export class MobileLobAppImpl extends MobileAppImpl implements MobileLobApp, Parsable {
    /** The internal committed content version. */
    public committedContentVersion?: string | undefined;
    /** The list of content versions for this app. */
    public contentVersions?: MobileAppContent[] | undefined;
    /** The name of the main Lob application file. */
    public fileName?: string | undefined;
    /** The total size, including all uploaded files. */
    public size?: number | undefined;
    /**
     * Instantiates a new mobileLobApp and sets the default values.
     * @param mobileLobAppParameterValue 
     */
    public constructor(mobileLobAppParameterValue?: MobileLobApp | undefined) {
        super();
        this.committedContentVersion = mobileLobAppParameterValue?.committedContentVersion ;
        this.contentVersions = mobileLobAppParameterValue?.contentVersions ;
        this.fileName = mobileLobAppParameterValue?.fileName ;
        this.size = mobileLobAppParameterValue?.size ;
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
        if(this.contentVersions && this.contentVersions.length != 0){        const contentVersionsArrValue: MobileAppContentImpl[] = []; this.contentVersions?.forEach(element => {contentVersionsArrValue.push(new MobileAppContentImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppContentImpl>("contentVersions", contentVersionsArrValue);
        }
        if(this.fileName){
        writer.writeStringValue("fileName", this.fileName);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
    };
}
