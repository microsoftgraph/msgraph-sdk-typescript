import {ManagedMobileAppImpl} from '../../../../../models/';
import {createManagedMobileAppFromDiscriminatorValue} from '../../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {ManagedMobileApp} from '../../../../../models/managedMobileApp';
import {TargetAppsRequestBody} from './targetAppsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the targetApps method.  */
export class TargetAppsRequestBodyImpl implements AdditionalDataHolder, Parsable, TargetAppsRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The apps property  */
    apps?: ManagedMobileApp[] | undefined;
    /**
     * Instantiates a new targetAppsRequestBody and sets the default values.
     * @param targetAppsRequestBodyParameterValue 
     */
    public constructor(targetAppsRequestBodyParameterValue?: TargetAppsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = targetAppsRequestBodyParameterValue?.additionalData ? {} : targetAppsRequestBodyParameterValue?.additionalData!
        this.apps = targetAppsRequestBodyParameterValue?.apps ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.apps){
        const appsArrValue: ManagedMobileAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
