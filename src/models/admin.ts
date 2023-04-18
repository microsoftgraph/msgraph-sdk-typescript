import {createEdgeFromDiscriminatorValue} from './createEdgeFromDiscriminatorValue';
import {createServiceAnnouncementFromDiscriminatorValue} from './createServiceAnnouncementFromDiscriminatorValue';
import {createSharepointFromDiscriminatorValue} from './createSharepointFromDiscriminatorValue';
import {Edge, ServiceAnnouncement, Sharepoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Admin implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A container for Microsoft Edge resources. Read-only. */
    private _edge?: Edge | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A container for service communications resources. Read-only. */
    private _serviceAnnouncement?: ServiceAnnouncement | undefined;
    /** The sharepoint property */
    private _sharepoint?: Sharepoint | undefined;
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
     * Instantiates a new Admin and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the edge property value. A container for Microsoft Edge resources. Read-only.
     * @returns a edge
     */
    public get edge() {
        return this._edge;
    };
    /**
     * Sets the edge property value. A container for Microsoft Edge resources. Read-only.
     * @param value Value to set for the edge property.
     */
    public set edge(value: Edge | undefined) {
        this._edge = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "edge": n => { this.edge = n.getObjectValue<Edge>(createEdgeFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serviceAnnouncement": n => { this.serviceAnnouncement = n.getObjectValue<ServiceAnnouncement>(createServiceAnnouncementFromDiscriminatorValue); },
            "sharepoint": n => { this.sharepoint = n.getObjectValue<Sharepoint>(createSharepointFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Edge>("edge", this.edge);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ServiceAnnouncement>("serviceAnnouncement", this.serviceAnnouncement);
        writer.writeObjectValue<Sharepoint>("sharepoint", this.sharepoint);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @returns a serviceAnnouncement
     */
    public get serviceAnnouncement() {
        return this._serviceAnnouncement;
    };
    /**
     * Sets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @param value Value to set for the serviceAnnouncement property.
     */
    public set serviceAnnouncement(value: ServiceAnnouncement | undefined) {
        this._serviceAnnouncement = value;
    };
    /**
     * Gets the sharepoint property value. The sharepoint property
     * @returns a sharepoint
     */
    public get sharepoint() {
        return this._sharepoint;
    };
    /**
     * Sets the sharepoint property value. The sharepoint property
     * @param value Value to set for the sharepoint property.
     */
    public set sharepoint(value: Sharepoint | undefined) {
        this._sharepoint = value;
    };
}
