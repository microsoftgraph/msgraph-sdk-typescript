import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the archive method.  */
export class ArchiveRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The shouldSetSpoSiteReadOnlyForMembers property  */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new archiveRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "shouldSetSpoSiteReadOnlyForMembers": (o, n) => { (o as unknown as ArchiveRequestBody).shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", this.shouldSetSpoSiteReadOnlyForMembers);
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
        this._shouldSetSpoSiteReadOnlyForMembers = value;
    };
}
