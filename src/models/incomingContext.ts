import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncomingContext implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ID of the participant that is under observation. Read-only. */
    private _observedParticipantId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The identity that the call is happening on behalf of. */
    private _onBehalfOf?: IdentitySet | undefined;
    /** The ID of the participant that triggered the incoming call. Read-only. */
    private _sourceParticipantId?: string | undefined;
    /** The identity that transferred the call. */
    private _transferor?: IdentitySet | undefined;
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
     * Instantiates a new incomingContext and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.incomingContext";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "observedParticipantId": n => { this.observedParticipantId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "onBehalfOf": n => { this.onBehalfOf = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "sourceParticipantId": n => { this.sourceParticipantId = n.getStringValue(); },
            "transferor": n => { this.transferor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the observedParticipantId property value. The ID of the participant that is under observation. Read-only.
     * @returns a string
     */
    public get observedParticipantId() {
        return this._observedParticipantId;
    };
    /**
     * Sets the observedParticipantId property value. The ID of the participant that is under observation. Read-only.
     * @param value Value to set for the observedParticipantId property.
     */
    public set observedParticipantId(value: string | undefined) {
        this._observedParticipantId = value;
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
     * Gets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @returns a identitySet
     */
    public get onBehalfOf() {
        return this._onBehalfOf;
    };
    /**
     * Sets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @param value Value to set for the onBehalfOf property.
     */
    public set onBehalfOf(value: IdentitySet | undefined) {
        this._onBehalfOf = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("observedParticipantId", this.observedParticipantId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<IdentitySet>("onBehalfOf", this.onBehalfOf);
        writer.writeStringValue("sourceParticipantId", this.sourceParticipantId);
        writer.writeObjectValue<IdentitySet>("transferor", this.transferor);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceParticipantId property value. The ID of the participant that triggered the incoming call. Read-only.
     * @returns a string
     */
    public get sourceParticipantId() {
        return this._sourceParticipantId;
    };
    /**
     * Sets the sourceParticipantId property value. The ID of the participant that triggered the incoming call. Read-only.
     * @param value Value to set for the sourceParticipantId property.
     */
    public set sourceParticipantId(value: string | undefined) {
        this._sourceParticipantId = value;
    };
    /**
     * Gets the transferor property value. The identity that transferred the call.
     * @returns a identitySet
     */
    public get transferor() {
        return this._transferor;
    };
    /**
     * Sets the transferor property value. The identity that transferred the call.
     * @param value Value to set for the transferor property.
     */
    public set transferor(value: IdentitySet | undefined) {
        this._transferor = value;
    };
}
