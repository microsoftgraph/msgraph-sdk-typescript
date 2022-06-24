import {AppListItem} from './appListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents an app in the list of managed applications */
export class AppListItemImpl implements AppListItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The application or bundle identifier of the application */
    public appId?: string | undefined;
    /** The Store URL of the application */
    public appStoreUrl?: string | undefined;
    /** The application name */
    public name?: string | undefined;
    /** The publisher of the application */
    public publisher?: string | undefined;
    /**
     * Instantiates a new appListItem and sets the default values.
     * @param appListItemParameterValue 
     */
    public constructor(appListItemParameterValue?: AppListItem | undefined) {
        this.additionalData = appListItemParameterValue?.additionalData ? appListItemParameterValue?.additionalData! : {};
        this.appId = appListItemParameterValue?.appId;
        this.appStoreUrl = appListItemParameterValue?.appStoreUrl;
        this.name = appListItemParameterValue?.name;
        this.publisher = appListItemParameterValue?.publisher;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        if(this.appStoreUrl){
            writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.publisher){
            writer.writeStringValue("publisher", this.publisher);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
