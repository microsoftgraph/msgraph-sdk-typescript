import {ManagedMobileAppImpl} from '../../../../models/';
import {createManagedMobileAppFromDiscriminatorValue} from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the targetApps method. */
export class TargetAppsPostRequestBodyImpl implements AdditionalDataHolder, Parsable, TargetAppsPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The appGroupType property */
    public appGroupType?: TargetedManagedAppGroupType | undefined;
    /** The apps property */
    public apps?: ManagedMobileApp[] | undefined;
    /**
     * Instantiates a new targetAppsPostRequestBody and sets the default values.
     * @param targetAppsPostRequestBodyParameterValue 
     */
    public constructor(targetAppsPostRequestBodyParameterValue?: TargetAppsPostRequestBody | undefined) {
        this.additionalData = targetAppsPostRequestBodyParameterValue?.additionalData ? targetAppsPostRequestBodyParameterValue?.additionalData! : {}
        this.appGroupType = targetAppsPostRequestBodyParameterValue?.appGroupType ;
        this.apps = targetAppsPostRequestBodyParameterValue?.apps ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appGroupType": n => { this.appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType); },
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appGroupType){
        writer.writeEnumValue<TargetedManagedAppGroupType>("appGroupType", this.appGroupType);
        }
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
