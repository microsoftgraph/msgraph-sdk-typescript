import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IncomingContext} from './incomingContext';
import {IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncomingContextImpl implements IncomingContext {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The id of the participant that is under observation. Read-only. */
    private _observedParticipantId?: string | undefined;
    /** The identity that the call is happening on behalf of. */
    private _onBehalfOf?: IdentitySet | undefined;
    /** The id of the participant that triggered the incoming call. Read-only. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new incomingContext and sets the default values.
     * @param incomingContextParameterValue 
     */
    public constructor(incomingContextParameterValue?: IncomingContext | undefined) {
        this._additionalData = incomingContextParameterValue?.additionalData ? incomingContextParameterValue?.additionalData! : {};
        this._observedParticipantId = incomingContextParameterValue?.observedParticipantId;
        this._onBehalfOf = incomingContextParameterValue?.onBehalfOf;
        this._sourceParticipantId = incomingContextParameterValue?.sourceParticipantId;
        this._transferor = incomingContextParameterValue?.transferor;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "observedParticipantId": n => { this.observedParticipantId = n.getStringValue(); },
            "onBehalfOf": n => { this.onBehalfOf = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sourceParticipantId": n => { this.sourceParticipantId = n.getStringValue(); },
            "transferor": n => { this.transferor = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the observedParticipantId property value. The id of the participant that is under observation. Read-only.
     * @returns a string
     */
    public get observedParticipantId() {
        return this._observedParticipantId;
    };
    /**
     * Sets the observedParticipantId property value. The id of the participant that is under observation. Read-only.
     * @param value Value to set for the observedParticipantId property.
     */
    public set observedParticipantId(value: string | undefined) {
        if(value) {
            this._observedParticipantId = value;
        }
    };
    /**
     * Gets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @returns a IdentitySetInterface
     */
    public get onBehalfOf() {
        return this._onBehalfOf;
    };
    /**
     * Sets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @param value Value to set for the onBehalfOf property.
     */
    public set onBehalfOf(value: IdentitySet | undefined) {
        if(value) {
            this._onBehalfOf = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.observedParticipantId){
            writer.writeStringValue("observedParticipantId", this.observedParticipantId);
        }
        if(this.onBehalfOf){
            writer.writeObjectValue<IdentitySetImpl>("onBehalfOf", (!this.onBehalfOf || this.onBehalfOf instanceof IdentitySetImpl? this.onBehalfOf : new IdentitySetImpl(this.onBehalfOf)));
        }
        if(this.sourceParticipantId){
            writer.writeStringValue("sourceParticipantId", this.sourceParticipantId);
        }
        if(this.transferor){
            writer.writeObjectValue<IdentitySetImpl>("transferor", (!this.transferor || this.transferor instanceof IdentitySetImpl? this.transferor : new IdentitySetImpl(this.transferor)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceParticipantId property value. The id of the participant that triggered the incoming call. Read-only.
     * @returns a string
     */
    public get sourceParticipantId() {
        return this._sourceParticipantId;
    };
    /**
     * Sets the sourceParticipantId property value. The id of the participant that triggered the incoming call. Read-only.
     * @param value Value to set for the sourceParticipantId property.
     */
    public set sourceParticipantId(value: string | undefined) {
        if(value) {
            this._sourceParticipantId = value;
        }
    };
    /**
     * Gets the transferor property value. The identity that transferred the call.
     * @returns a IdentitySetInterface
     */
    public get transferor() {
        return this._transferor;
    };
    /**
     * Sets the transferor property value. The identity that transferred the call.
     * @param value Value to set for the transferor property.
     */
    public set transferor(value: IdentitySet | undefined) {
        if(value) {
            this._transferor = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
}
