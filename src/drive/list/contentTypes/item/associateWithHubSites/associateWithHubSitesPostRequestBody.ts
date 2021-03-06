import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the associateWithHubSites method. */
export class AssociateWithHubSitesPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The hubSiteUrls property */
    private _hubSiteUrls?: string[] | undefined;
    /** The propagateToExistingLists property */
    private _propagateToExistingLists?: boolean | undefined;
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
     * Instantiates a new associateWithHubSitesPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * Gets the hubSiteUrls property value. The hubSiteUrls property
     * @returns a string
     */
    public get hubSiteUrls() {
        return this._hubSiteUrls;
    };
    /**
     * Sets the hubSiteUrls property value. The hubSiteUrls property
     * @param value Value to set for the hubSiteUrls property.
     */
    public set hubSiteUrls(value: string[] | undefined) {
        this._hubSiteUrls = value;
    };
    /**
     * Gets the propagateToExistingLists property value. The propagateToExistingLists property
     * @returns a boolean
     */
    public get propagateToExistingLists() {
        return this._propagateToExistingLists;
    };
    /**
     * Sets the propagateToExistingLists property value. The propagateToExistingLists property
     * @param value Value to set for the propagateToExistingLists property.
     */
    public set propagateToExistingLists(value: boolean | undefined) {
        this._propagateToExistingLists = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", this.hubSiteUrls);
        writer.writeBooleanValue("propagateToExistingLists", this.propagateToExistingLists);
        writer.writeAdditionalData(this.additionalData);
    };
}
