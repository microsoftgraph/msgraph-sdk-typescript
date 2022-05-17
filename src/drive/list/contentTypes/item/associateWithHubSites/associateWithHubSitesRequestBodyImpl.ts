import {AssociateWithHubSitesRequestBody} from './associateWithHubSitesRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the associateWithHubSites method. */
export class AssociateWithHubSitesRequestBodyImpl implements AdditionalDataHolder, AssociateWithHubSitesRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The hubSiteUrls property */
    hubSiteUrls?: string[] | undefined;
    /** The propagateToExistingLists property */
    propagateToExistingLists?: boolean | undefined;
    /**
     * Instantiates a new associateWithHubSitesRequestBody and sets the default values.
     * @param associateWithHubSitesRequestBodyParameterValue 
     */
    public constructor(associateWithHubSitesRequestBodyParameterValue?: AssociateWithHubSitesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = associateWithHubSitesRequestBodyParameterValue?.additionalData ? {} : associateWithHubSitesRequestBodyParameterValue?.additionalData!
        this.hubSiteUrls = associateWithHubSitesRequestBodyParameterValue?.hubSiteUrls ;
        this.propagateToExistingLists = associateWithHubSitesRequestBodyParameterValue?.propagateToExistingLists ;
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
        if(this.hubSiteUrls)
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", this.hubSiteUrls);
        }
        if(this.propagateToExistingLists){
        if(this.propagateToExistingLists)
        writer.writeBooleanValue("propagateToExistingLists", this.propagateToExistingLists);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
