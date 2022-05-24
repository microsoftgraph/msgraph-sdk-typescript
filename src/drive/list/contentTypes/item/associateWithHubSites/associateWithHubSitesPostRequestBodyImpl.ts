import {AssociateWithHubSitesPostRequestBody} from './associateWithHubSitesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the associateWithHubSites method. */
export class AssociateWithHubSitesPostRequestBodyImpl implements AdditionalDataHolder, AssociateWithHubSitesPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The hubSiteUrls property */
    public hubSiteUrls?: string[] | undefined;
    /** The propagateToExistingLists property */
    public propagateToExistingLists?: boolean | undefined;
    /**
     * Instantiates a new associateWithHubSitesPostRequestBody and sets the default values.
     * @param associateWithHubSitesPostRequestBodyParameterValue 
     */
    public constructor(associateWithHubSitesPostRequestBodyParameterValue?: AssociateWithHubSitesPostRequestBody | undefined) {
        this.additionalData = associateWithHubSitesPostRequestBodyParameterValue?.additionalData ? associateWithHubSitesPostRequestBodyParameterValue?.additionalData! : {}
        this.hubSiteUrls = associateWithHubSitesPostRequestBodyParameterValue?.hubSiteUrls ;
        this.propagateToExistingLists = associateWithHubSitesPostRequestBodyParameterValue?.propagateToExistingLists ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hubSiteUrls": n => { this.hubSiteUrls = n.getCollectionOfPrimitiveValues<string>(); },
            "propagateToExistingLists": n => { this.propagateToExistingLists = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hubSiteUrls){
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", this.hubSiteUrls);
        }
        if(this.propagateToExistingLists){
        writer.writeBooleanValue("propagateToExistingLists", this.propagateToExistingLists);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
