import {CallRoute} from './callRoute';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {RoutingType} from './routingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRouteImpl implements AdditionalDataHolder, CallRoute, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The final property */
    public final?: IdentitySet | undefined;
    /** The original property */
    public original?: IdentitySet | undefined;
    /** Possible values are: forwarded, lookup, selfFork. */
    public routingType?: RoutingType | undefined;
    /**
     * Instantiates a new callRoute and sets the default values.
     * @param callRouteParameterValue 
     */
    public constructor(callRouteParameterValue?: CallRoute | undefined) {
        this.additionalData = callRouteParameterValue?.additionalData ? callRouteParameterValue?.additionalData! : {}
        this.final = callRouteParameterValue?.final ;
        this.original = callRouteParameterValue?.original ;
        this.routingType = callRouteParameterValue?.routingType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.final){
        writer.writeObjectValue<IdentitySetImpl>("final", new IdentitySetImpl(this.final));
        }
        if(this.original){
        writer.writeObjectValue<IdentitySetImpl>("original", new IdentitySetImpl(this.original));
        }
        if(this.routingType){
        writer.writeEnumValue<RoutingType>("routingType", this.routingType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
