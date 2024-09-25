package com.hammy.jwt.backend.mapper;

import com.hammy.jwt.backend.dto.SignUpDto;
import com.hammy.jwt.backend.dto.UserDto;
import com.hammy.jwt.backend.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}
