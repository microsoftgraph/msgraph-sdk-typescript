import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the archive method. */
export class ArchivePostRequestBodyImpl implements AdditionalDataHolder, ArchivePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The shouldSetSpoSiteReadOnlyForMembers property */
    public shouldSetSpoSiteReadOnlyForMembers?: boolean | undefined;
    /**
     * Instantiates a new archivePostRequestBody and sets the default values.
     * @param archivePostRequestBodyParameterValue 
     */
    public constructor(archivePostRequestBodyParameterValue?: ArchivePostRequestBody | undefined) {
        this.additionalData = archivePostRequestBodyParameterValue?.additionalData ? archivePostRequestBodyParameterValue?.additionalData! : {}
        this.shouldSetSpoSiteReadOnlyForMembers = archivePostRequestBodyParameterValue?.shouldSetSpoSiteReadOnlyForMembers ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "shouldSetSpoSiteReadOnlyForMembers": n => { this.shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.shouldSetSpoSiteReadOnlyForMembers){
        writer.writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", this.shouldSetSpoSiteReadOnlyForMembers);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
