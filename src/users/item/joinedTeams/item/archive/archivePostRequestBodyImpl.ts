import {ArchivePostRequestBody} from './archivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the archive method. */
export class ArchivePostRequestBodyImpl implements ArchivePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The shouldSetSpoSiteReadOnlyForMembers property */
    private _shouldSetSpoSiteReadOnlyForMembers?: boolean | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new archivePostRequestBody and sets the default values.
     * @param archivePostRequestBodyParameterValue 
     */
    public constructor(archivePostRequestBodyParameterValue?: ArchivePostRequestBody | undefined) {
        this._additionalData = archivePostRequestBodyParameterValue?.additionalData ? archivePostRequestBodyParameterValue?.additionalData! : {};
        this._shouldSetSpoSiteReadOnlyForMembers = archivePostRequestBodyParameterValue?.shouldSetSpoSiteReadOnlyForMembers;
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
    /**
     * Gets the shouldSetSpoSiteReadOnlyForMembers property value. The shouldSetSpoSiteReadOnlyForMembers property
     * @returns a boolean
     */
    public get shouldSetSpoSiteReadOnlyForMembers() {
        return this._shouldSetSpoSiteReadOnlyForMembers;
    };
    /**
     * Sets the shouldSetSpoSiteReadOnlyForMembers property value. The shouldSetSpoSiteReadOnlyForMembers property
     * @param value Value to set for the shouldSetSpoSiteReadOnlyForMembers property.
     */
    public set shouldSetSpoSiteReadOnlyForMembers(value: boolean | undefined) {
        if(value) {
            this._shouldSetSpoSiteReadOnlyForMembers = value;
        }
    };
}
