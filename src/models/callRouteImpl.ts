import {CallRoute} from './callRoute';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {RoutingType} from './routingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRouteImpl implements CallRoute {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The final property */
    private _final?: IdentitySet | undefined;
    /** The original property */
    private _original?: IdentitySet | undefined;
    /** Possible values are: forwarded, lookup, selfFork. */
    private _routingType?: RoutingType | undefined;
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
     * Instantiates a new callRoute and sets the default values.
     * @param callRouteParameterValue 
     */
    public constructor(callRouteParameterValue?: CallRoute | undefined) {
        this._additionalData = callRouteParameterValue?.additionalData ? callRouteParameterValue?.additionalData! : {};
        this._final = callRouteParameterValue?.final;
        this._original = callRouteParameterValue?.original;
        this._routingType = callRouteParameterValue?.routingType;
    };
    /**
     * Gets the final property value. The final property
     * @returns a IdentitySetInterface
     */
    public get final() {
        return this._final;
    };
    /**
     * Sets the final property value. The final property
     * @param value Value to set for the final property.
     */
    public set final(value: IdentitySet | undefined) {
        if(value) {
            this._final = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "final": n => { this.final = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "original": n => { this.original = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "routingType": n => { this.routingType = n.getEnumValue<RoutingType>(RoutingType); },
        };
    };
    /**
     * Gets the original property value. The original property
     * @returns a IdentitySetInterface
     */
    public get original() {
        return this._original;
    };
    /**
     * Sets the original property value. The original property
     * @param value Value to set for the original property.
     */
    public set original(value: IdentitySet | undefined) {
        if(value) {
            this._original = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the routingType property value. Possible values are: forwarded, lookup, selfFork.
     * @returns a routingType
     */
    public get routingType() {
        return this._routingType;
    };
    /**
     * Sets the routingType property value. Possible values are: forwarded, lookup, selfFork.
     * @param value Value to set for the routingType property.
     */
    public set routingType(value: RoutingType | undefined) {
        if(value) {
            this._routingType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.final){
            writer.writeObjectValue<IdentitySetImpl>("final", (!this.final || this.final instanceof IdentitySetImpl? this.final : new IdentitySetImpl(this.final)));
        }
        if(this.original){
            writer.writeObjectValue<IdentitySetImpl>("original", (!this.original || this.original instanceof IdentitySetImpl? this.original : new IdentitySetImpl(this.original)));
        }
        if(this.routingType){
            writer.writeEnumValue<RoutingType>("routingType", this.routingType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
