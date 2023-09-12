import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { BaseAuthenticationMethod } from './baseAuthenticationMethod';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodModeDetail(writer: SerializationWriter, authenticationMethodModeDetail: AuthenticationMethodModeDetail | undefined = {} as AuthenticationMethodModeDetail) : void {
        serializeEntity(writer, authenticationMethodModeDetail)
        writer.writeEnumValue<BaseAuthenticationMethod>("authenticationMethod", authenticationMethodModeDetail.authenticationMethod);
        writer.writeStringValue("displayName", authenticationMethodModeDetail.displayName);
}
